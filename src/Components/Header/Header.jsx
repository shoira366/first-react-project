import useLang from '../../Hook/useLang';
import './Header.css';
import information from '../../Informations/infos';

console.log()


function Header({ logo, house, email, shuffle }) {
    let [lang, setLang] = useLang()

    return (
        <header className="header">
            <div className="container">
                <nav className="header_nav">
                    <div className="logo-box">
                        <a className="header_logo" href="#tab">
                            <img className="header_img" src={logo} />
                        </a>
                        <div className="countries">
                            <a href="#tab" className="dwidasa">DWIDASA</a>
                            <span className="samsara">SAMSARA</span>
                            <span className="indonesia">INDONESIA</span>
                        </div>
                    </div>
                    <ul className="header_list">
                        <li className="header_list-item">
                            <a className="header_list-link" href="#tab">{information[lang].service}</a>
                        </li>
                        <li className="header_list-item">
                            <a className="header_list-link" href="#tab">{information[lang].product}</a>
                        </li>
                        <li className="header_list-item">
                            <a className="header_list-link" href="#tab">{information[lang].technology}</a>
                        </li>
                        <li className="header_list-item">
                            <a className="header_list-link" href="#tab">{information[lang].about}</a>
                        </li>
                        <li className="header_list-item">
                            <a className="header_list-link" href="#tab">{information[lang].client}</a>
                        </li>
                        <li className="header_list-item">
                            <a className="header_list-link" href="#tab">{information[lang].partner}</a>
                        </li>
                    </ul>
                    <ul className="header_img-list">
                        <li className="header_img-item">
                            <a href="#tab">
                                <img src={house} alt="" />
                            </a>
                        </li>
                        <li className="header_img-item">
                            <a href="#tab">
                                <img src={email} alt="" />
                            </a>
                        </li>
                        <li className="header_img-item">
                            <a href="#tab">
                                <img src={shuffle} alt="" />
                            </a>
                        </li>
                    </ul>
                    <select className='select' onChange={(e) => {
                        setLang(e.target.value)
                    }}>
                        <option value="eng">ENG</option>
                        <option value="ru">RU</option>
                    </select>
                </nav>
            </div>
        </header>
    )
}

export default Header