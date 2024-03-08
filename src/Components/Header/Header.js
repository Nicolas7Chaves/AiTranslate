import './Header.scss'
import headerLogo from '../../Assets/earth.svg'
function Header() {

    return (
        <section>
        <div className='header'>
            <div className='header__title'> AI </div>
            <img className='header__background' src={headerLogo} alt='world map header' />
            <div className='header__title'> Translate</div>
        </div>
        </section>
    )
}

export default Header;