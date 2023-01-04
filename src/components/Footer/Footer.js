import "./Footer.scss";
import {useState, useEffect} from "react";
import {Route, Routes, useNavigate, useLocation} from "react-router-dom";
import logo from "../../images/logo-lubimovka-footer.png";
import prokhorovLogo from "../../images/prokhorov-logo.png";
import mosbrewLogo from "../../images/mosbrew-logo.png";
import sbtgLogo from "../../images/sbtg-logo.png";
import apogovoritLogo from "../../images/pogovorit-logo.png";
import shishkiLogo from "../../images/shishki-logo.svg";

function Footer() {

    return (
        <footer className="footer">
            <img className="footer__logo" alt="" src={logo}/>
            <div className="footer__container">
                <div className="footer__partners-wrapper">
                    <p className="footer__title">Генеральные партнеры</p>
                    <ul className="footer__partners">
                        <li className="footer__partner"><a className="footer__partner-link" href=""><img
                            src={prokhorovLogo} alt="лого фонда Прохорова"/></a></li>
                        <li className="footer__partner"><a className="footer__partner-link" href=""><img
                            src={mosbrewLogo} alt="лого Mosbrew"/></a></li>
                        <li className="footer__partner"><a className="footer__partner-link" href=""><img src={sbtgLogo}
                                                                                                         alt="лого SBTG"/></a>
                        </li>
                        <li className="footer__partner"><a className="footer__partner-link" href=""><img
                            src={apogovoritLogo} alt="лого А поговорить"/></a></li>
                    </ul>
                </div>
                <ul className="footer__columns">
                    <div className="footer__address-column">
                        <h3 className="footer__address_name">Площадка «8/3»</h3>
                        <p className="footer__address_location">Москва, ул.&nbsp;Казакова,&nbsp;8,&nbsp;стр.&nbsp;3
                            Метро&nbsp;«Курская»</p>
                    </div>
                    <nav className="footer__navigation-columns">
                        <ul className="footer__navigation-column">
                            <li className="footer__navigation-element"><a className="footer__navigation-link"
                                                                          href="">Любимовка</a></li>
                            <li className="footer__navigation-element"><a className="footer__navigation-link"
                                                                          href="">Афиша</a></li>
                            <li className="footer__navigation-element"><a className="footer__navigation-link"
                                                                          href="">Библиотека</a></li>
                            <li className="footer__navigation-element"><a className="footer__navigation-link"
                                                                          href="">Блог</a></li>
                            <li className="footer__navigation-element"><a className="footer__navigation-link"
                                                                          href="">Новости</a></li>
                        </ul>
                        <ul className="footer__navigation-column">
                            <li className="footer__navigation-element"><a className="footer__navigation-link" href="">О
                                фестивале</a></li>
                            <li className="footer__navigation-element"><a className="footer__navigation-link"
                                                                          href="">Организаторы</a></li>
                            <li className="footer__navigation-element"><a className="footer__navigation-link"
                                                                          href="">История</a></li>
                            <li className="footer__navigation-element"><a className="footer__navigation-link"
                                                                          href="">Контакты</a></li>
                            <li className="footer__navigation-element"><a className="footer__navigation-link" href="">Для
                                прессы</a></li>
                        </ul>
                        <ul className="footer__navigation-column">
                            <li className="footer__navigation-element"><a className="footer__navigation-link" href="">Все
                                проекты</a></li>
                            <li className="footer__navigation-element"><a className="footer__navigation-link"
                                                                          href="">Любимовка.Ещё</a></li>
                            <li className="footer__navigation-element"><a className="footer__navigation-link"
                                                                          href="">Спектакли</a></li>
                            <li className="footer__navigation-element"><a className="footer__navigation-link" href="">Сборник
                                Любимовка.Пьесы</a></li>
                            <li className="footer__navigation-element"><a className="footer__navigation-link"
                                                                          href="">Lark+Любимовка</a></li>
                            <li className="footer__navigation-element"><a className="footer__navigation-link" href="">Практика
                                постдраматурга</a></li>
                            <li className="footer__navigation-element"><a className="footer__navigation-link" href="">Эхо
                                Любимовка</a></li>
                        </ul>
                    </nav>
                </ul>
                <div className="footer__misc-wrapper">
                    <div className="footer__misc">
                        <p className="footer__copyright">&#169; Любимовка, 2021</p>
                        <a href="#" className="footer__policy">Политика конфиденциальности</a>
                    </div>
                    <div className="footer__credits">
                        <img className="footer__designer-logo" alt="логотип проекта shishki"
                             src={shishkiLogo}/>
                        <p className="footer__designer-name">дизайн сайта —<br/>shishki.collective</p>
                        <p className="footer__developer">вёрстка и разработка —<br/>студенты Яндекс.Практикума</p>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;