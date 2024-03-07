import { useState } from "react";
import OpenAI from "openai";

const openai = new OpenAI();
// console.log(process.env.OPENAI_API_KEY)
console.log("Hello!")

function TranslateAi() {
    // console.log(process.env.OPENAI_API_KEY);
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
            const completion = await openai.chat.completions.create({
                model: 'gpt-4',
                prompt: promptData,
                max_tokens: 250,
                temperature: 0.95
            });

            console.log(completion.data)
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







