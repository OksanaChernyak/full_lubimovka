import "./RandomScript.scss";
import {useState, useEffect} from "react";
import {Route, Routes, useNavigate, useLocation} from "react-router-dom";


function RandomScript() {

    return (
        <section className="random-script">
            <div className="random-script__wrapper">
                <p className="random-script__title">С_училища</p>
                <button className="random-script__button">Смотреть читку</button>
                <button className="random-script__button">Скачать пьесу</button>
            </div>
            <p className="random-script__author">Андрей Иванов</p>
            <p className="random-script__place">Санкт-Петербург 2020</p>
        </section>
    )
};

export default RandomScript;