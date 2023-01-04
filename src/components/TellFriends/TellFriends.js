import "./TellFriends.scss";
import {useState, useEffect} from "react";
import {Route, Routes, useNavigate, useLocation} from "react-router-dom";


function TellFriends() {

    return (
        <div className="tell-friends">
            <div className="tell-friends__buttons">
                <button className="tell-friends__button">fb</button>
                <button className="tell-friends__button">vk</button>
                <button className="tell-friends__button">twtr</button>
            </div>
            <h2 className="tell-friends__title">Рассказать</h2>
            <h2 className="tell-friends__title">о спектакле в соцсетях</h2>
        </div>
    )
};

export default TellFriends;