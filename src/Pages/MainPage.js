import TranslateAi from '../Components/OpenAI/OpenAI';
import './MainPage.scss'
function MainPage() {

    return (
        <section className='translator'>
            <div className='translate'>
                <h2 className='translate__title'>
                    Translation Service
                </h2>
                <TranslateAi />
            </div>
        </section>
    )
}

export default MainPage;