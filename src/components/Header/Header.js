import "./Header.scss";
import {Link, useNavigate} from "react-router-dom";
import logo from "../../images/logo-lubimovka-header.png";

function Header() {
    const navigate = useNavigate();
    return (
        <header className="header">
            <img
                className="header__logo"
                alt="Логотип проекта"
                src={logo}
            />

            <nav className="header__navigation">
                <ul className="header__items">
                    <li className="header__item"><Link className="header__menu-link" to="/affiche" target="_blank">Афиша</Link></li>
                    <li className="header__item"><Link className="header__menu-link" to="/library" target="_blank">Библиотека</Link>
                    </li>
                    <li className="header__item"><Link className="header__menu-link" to="/projects" target="_blank">Проекты</Link></li>
                    <li className="header__item"><Link className="header__menu-link" to="/history" target="_blank">История</Link></li>
                    <li className="header__item"><Link className="header__menu-link" to="/blog" target="_blank">Блог</Link></li>
                    <li className="header__item"><Link className="header__menu-link" to="/news" target="_blank">Новости</Link></li>
                    <li className="header__item"><Link className="header__menu-link" to="/about" target="_blank">О фестивале</Link>
                    </li>
                    <li className="header__item"><Link className="header__menu-link" to="/contacts" target="_blank">Контакты</Link></li>
                </ul>
                <ul className="header__contact-links">
                    <li className="header__contact-item"><a className="header__contact-link" href="https://www.facebook.com/festival.lubimovka/" target="_blank">fb</a></li>
                    <li className="header__contact-item"><a className="header__contact-link" href="https://www.instagram.com/lubimovka/" target="_blank">inst</a></li>
                    <li className="header__contact-item"><a className="header__contact-link" href="https://www.youtube.com/channel/UCDZ1HTzBVBxm_vw6tV7C3lg" target="_blank">ytube</a></li>
                    <li className="header__contact-item"><a className="header__contact-link" href="https://t.me/lubimovka" target="_blank">tlgrm</a></li>
                    <li className="header__contact-item"><a className="header__contact-link" href="https://vk.com/festival.lubimovka" target="_blank">vk</a></li>
                </ul>
                <button className="header__support-button">+ Поддержать</button>
            </nav>
        </header>
    );
};

export default Header;