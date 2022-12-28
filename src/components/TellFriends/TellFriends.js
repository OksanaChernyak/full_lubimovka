import "./TellFriends.scss";
import {useState, useEffect} from "react";
import {Route, Routes, useNavigate, useLocation} from "react-router-dom";


function TellFriends() {

    return (
        <div className="tell-friends">
            <button className="tell-friends__button">fb</button>
            <button className="tell-friends__button">vk</button>
            <button className="tell-friends__button">twtr</button>
            <h2 className="tell-friends__title">Рассказать о спектакле в соцсетях</h2>
        </div>
    )
};

export default TellFriends;