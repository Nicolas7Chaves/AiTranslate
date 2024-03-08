import { useState } from "react";
import axios from "axios";
import './OpenAI.scss'

function TranslateAi() {
    const [translateText, setTranslateText] = useState('');
    const [result, setResult] = useState('')
    const [selectedLanguage, setSelectedLanguage] = useState('es');
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    const languages = [
        { code: 'es', name: 'Spanish' },
        { code: 'en', name: 'English' },
        { code: 'fr', name: 'French' },
        { code: 'de', name: 'German' },
    ]

    const translateTextHandler = async () => {
        try {
            const response = await axios.post("http://localhost:8001/", {
                text: translateText,
                language: selectedLanguage
            });
            const data = response.data;
            setResult(data.translatedResponse);
            console.log(data.translatedResponse);
        } catch (error) {
            console.error(error)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        translateTextHandler();
    }

    const handleInput = (e) => {
        const inputText = e.target.value;
        setTranslateText(inputText);
        setIsButtonDisabled(inputText.trim() === '');
    }

    return (
        <div className="translate">
            <div className="translate__title">
                Which Language to translate to:
                {languages.map((language) =>
                    <label key={language.code} className="translate__label">
                        <input
                            type="radio"
                            value={language.code}
                            checked={selectedLanguage === language.code}
                            onChange={() => setSelectedLanguage(language.code)}>
                        </input>
                        {language.name}
                    </label>
                )}
            </div >
            <form className='translate__form' onSubmit={handleSubmit}>
                <input className="translate__input" type='text' value={translateText} onChange={handleInput} />
                <button type='submit' className='translate__btn' disabled={isButtonDisabled}>Translate</button>
            </form>
            {
                result && (
                    <div className="translate__result" >
                        <h3> Results: </h3>
                        <p>{result}</p>
                    </div>
                )
            }
        </div>
    )
}
export default TranslateAi;







