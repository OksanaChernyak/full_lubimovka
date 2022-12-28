import "./PhotoGrid.scss";
import {useState, useEffect} from "react";
import {Route, Routes, useNavigate, useLocation} from "react-router-dom";
import pic1 from "../../images/gallery-1.jpeg";
import pic2 from "../../images/gallery-2.jpeg";
import pic3 from "../../images/gallery-3.jpeg";
import pic4 from "../../images/gallery-4.jpeg";
import pic5 from "../../images/gallery-5.jpeg";
import pic6 from "../../images/gallery-6.jpeg";
import pic7 from "../../images/gallery-7.jpeg";
import pic8 from "../../images/gallery-8.jpeg";


function PhotoGrid() {
    return (
        <ul className="photo-grid">
            <li><img className="photo-grid__item" alt="фото с читки" src={pic1}/>
            </li>
            <li><img className="photo-grid__item" alt="режиссер" src={pic2}/></li>
            <li><img className="photo-grid__item" alt="актриса читает пьесу"
                     src={pic3}/></li>
            <li><img className="photo-grid__item" alt="читка новой пьесы"
                     src={pic4}/></li>
            <li><img className="photo-grid__item" alt="читка на сцене" src={pic5}/>
            </li>
            <li><img className="photo-grid__item" alt="портрет одного из актеров театра"
                     src={pic6}/></li>
            <li><img className="photo-grid__item" alt="читка экспериментальных пьес"
                     src={pic7}/></li>
            <li><img className="photo-grid__item" alt="зрители" src={pic8}/></li>
        </ul>
    )
};

export default PhotoGrid;