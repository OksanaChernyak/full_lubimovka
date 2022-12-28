import "./Projects.scss";
import {useState, useEffect} from "react";
import {Route, Routes, useNavigate, useLocation} from "react-router-dom";
import Play from "../Play/Play";
import Performance from "../Performance/Performance";
import Gallery from "../Gallery/Gallery";
import OfficialReviews from "../OfficialReviews/OfficialReviews";
import ViewerReviews from "../ViewerReviews/ViewerReviews";
import SidePhoto from "../SidePhoto/SidePhoto";
import TellFriends from "../TellFriends/TellFriends";

function Projects() {

    return (
        <div className="projects">
            <main className="projects__main">
                <Play/>
                <Performance/>
                <Gallery/>
                <OfficialReviews/>
                <ViewerReviews/>
                <SidePhoto/>
                <TellFriends/>
            </main>
        </div>
    )
};

export default Projects;