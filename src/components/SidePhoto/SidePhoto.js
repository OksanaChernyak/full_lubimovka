import "./SidePhoto.scss";
import {useState, useEffect} from "react";
import {Route, Routes, useNavigate, useLocation} from "react-router-dom";
import sidePhoto from "../../images/side-photo.jpg";


function SidePhoto() {

    return (
        <><img className="side-photo" alt="эпизод из спектакля С_училища" src={sidePhoto}/></>

    )
};

export default SidePhoto;