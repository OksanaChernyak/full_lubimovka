import "./Gallery.scss";
import {useState, useEffect} from "react";
import {Route, Routes, useNavigate, useLocation} from "react-router-dom";
import PhotoGrid from "../PhotoGrid/PhotoGrid";


function Gallery() {

    return (
        <section className="gallery">
            <h2 className="gallery__title">Заголовок блока с фотографиями</h2>
            <PhotoGrid/>
        </section>
    )
};

export default Gallery;