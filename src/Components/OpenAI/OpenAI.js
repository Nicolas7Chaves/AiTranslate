import { useState } from "react";

import { OpenAI } from "openai";
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});


function TranslateAi() {
    const [translateText, setTranslateText] = useState('');
    function TranslateBtn() {
        TranslatedText(setTranslateText)
    }


    async function TranslatedText(setTranslateText) {
        const promptData = [
            {
                role: 'system',
                content: 'You are a translator, translate from the Users english to Spanish.'
            },
            {
                role: 'user',
                content: setTranslateText
            }
        ]
        try {
            const response = await openai.createCompletion({
                model: '',
                prompt: promptData,
                max_tokens: 250,
                temperature: 0.95
            });

            console.log(response.data)
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <form className='translate__form' >
            <input type='text' onChange={(e) => setTranslateText(e.target.value)} />
            <button className='translate-btn' onClick={TranslateBtn}>Translate</button>
        </form>
    )
}
export default TranslateAi;







