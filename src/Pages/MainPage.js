import './MainPage.scss'

function MainPage() {

    return (
        <section className='translator'>
            <div className='translate'>
                <h2 className='translate__title'>
                    Text to translate
                </h2>
                <form className='translate__form' action='submit' method='post'>
                    <input type='text' id='translateText' name='Text to Translate' />
                    <button type='submit'>Translate</button>
                </form>
            </div>
        </section>
    )
}

export default MainPage;