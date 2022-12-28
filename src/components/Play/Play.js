import "./Play.scss";
import {useState, useEffect} from "react";
import {Route, Routes, useNavigate, useLocation} from "react-router-dom";
import mainPhoto from "../../images/main-photo.jpg";


function Play() {

    return (
        <section className="play">
            <button className="play__projects-btn" type="button">Проекты</button>
            <div className="play__wrapper_main">
                <div className="play__wrapper_intro">
                    <h1 className="play__title">С_училища</h1>
                    <p className="play__subtitle">Пьеса о демоническом обаянии студентки ПТУ и ее роковой роли в жизни&nbsp;преподавателя философии.</p>
                    <time className="play__time">12 мая 20:00</time>
                    <button className="play__tickets-btn">Билеты</button>
                </div>
                <div className="play__wrapper_description">
                    <img className="play__photo" alt="главное фото из пьесы" src={mainPhoto}/>
                    <p className="play__intro">Семён Серзин сделал читку этой пьесы в рамках основной программы
                        Любимовки-2017, Варочный Цех предоставил грант на постановку, а Московский драматический театр
                        имени
                        А.С. Пушкина принял спектакль в репертуар.</p>
                </div>
            </div>
        </section>
    )
};

export default Play;