import { useState } from "react";
import axios from "axios";

function TranslateAi() {
    const [translateText, setTranslateText] = useState('');
    const [result, setResult] = useState('')

    const translateTextHandler = async () => {
        try {
            const response = await axios.post("http://localhost:8001/", { text: translateText });
            const data = response.data;
            setResult(data.translatedResponse);
            console.log(data.translatedResponse);
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <>
            <form className='translate__form' onSubmit={(e) => { e.preventDefault(); translateTextHandler(); }}>
                <input type='text' value={translateText} onChange={(e) => setTranslateText(e.target.value)} />
                <button type='submit' className='translate-btn'>Translate</button>
            </form>
            <div>
                Result:
            </div>
            {result && (
                <div className="translate__result" >
                    <h3> Results: </h3>
                    <p>{result}</p>
                </div>
            )}
        </>
    )
}
export default TranslateAi;







