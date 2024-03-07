const express = require('express');
const cors = require('cors');
const axios = require('axios');
const { OpenAI } = require("openai");
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

app.post('/', async (req, res) => {
    const { text, language } = req.body;
    const systemContent = {
        'es': 'You are a translator, translate the user text to Spanish.',
        'en': 'You are a translator, translate the user text to English.',
        'fr': 'You are a translator, translate the user text to French.',
        'de': 'You are a translator, translate the user text to German.',
    };
    const messages = [
        {
            role: 'system',
            content: systemContent[language] || 'You are a language translator'
        },
        {
            role: 'user',
            content: text
        }
    ];

    try {
        const completion = await openai.chat.completions.create({
            model: 'gpt-4',
            messages: messages,
            temperature: 0.75
        });
        const translatedResponse = completion.choices[0].message.content
        res.json({ translatedResponse: translatedResponse });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
