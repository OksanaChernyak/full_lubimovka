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
            <p className="footer__title">Генеральные партнеры</p>
            <ul className="footer__partners">
                <li><a href=""><img src={prokhorovLogo} alt="лого фонда Прохорова"/></a></li>
                <li><a href=""><img src={mosbrewLogo} alt="лого Mosbrew"/></a></li>
                <li><a href=""><img src={sbtgLogo} alt="лого SBTG"/></a></li>
                <li><a href=""><img src={apogovoritLogo} alt="лого А поговорить"/></a></li>
            </ul>

            <ul className="footer__columns">
                <div className="footer__adress">
                    <h3 className="footer__adress_name">Площадка «8/3»</h3>
                    <p className="footer__adress_location">Москва, ул. Казакова, 8, стр. 3 Метро «Курская»</p>
                </div>
                <nav className="footer__navigation">
                    <ul className="footer__navigation_first">
                        <li><a className="footer__navigation-link" href="">Любимовка</a></li>
                        <li><a className="footer__navigation-link" href="">Афиша</a></li>
                        <li><a className="footer__navigation-link" href="">Библиотека</a></li>
                        <li><a className="footer__navigation-link" href="">Блог</a></li>
                        <li><a className="footer__navigation-link" href="">Новости</a></li>
                    </ul>
                    <ul className="footer__navigation_second">
                        <li><a className="footer__navigation-link" href="">О фестивале</a></li>
                        <li><a className="footer__navigation-link" href="">Организаторы</a></li>
                        <li><a className="footer__navigation-link" href="">История</a></li>
                        <li><a className="footer__navigation-link" href="">Контакты</a></li>
                        <li><a className="footer__navigation-link" href="">Для прессы</a></li>
                    </ul>
                    <ul className="footer__navigation_third">
                        <li><a className="footer__navigation-link" href="">Все проекты</a></li>
                        <li><a className="footer__navigation-link" href="">Любимовка.Ещё</a></li>
                        <li><a className="footer__navigation-link" href="">Спектакли</a></li>
                        <li><a className="footer__navigation-link" href="">Сборник Любимовка.Пьесы</a></li>
                        <li><a className="footer__navigation-link" href="">Lark+Любимовка</a></li>
                        <li><a className="footer__navigation-link" href="">Практика постдраматурга</a></li>
                        <li><a className="footer__navigation-link" href="">Эхо Любимовка</a></li>
                    </ul>
                    <div className="footer__misc">
                        <p className="footer__copyright">С Любимовка, 2021</p>
                        <a href="" className="footer__policy"></a>
                    </div>
                    <div className="footer__credits">
                        <div className="footer__designer">
                            <img className="footer__designer-logo" alt="логотип проекта shishki"
                                 src={shishkiLogo}/>
                                <p className="footer__designer-name">дизайн сайта — shishki.collective</p>
                        </div>
                        <p className="footer__developer">вёрстка и разработка — студенты Яндекс.Практикума</p>
                    </div>
                </nav>
            </ul>
        </footer>
    )
};

export default Footer;