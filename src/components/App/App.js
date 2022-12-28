import "./App.scss";
import {useState, useEffect} from "react";
import {Route, Routes, useNavigate, useLocation} from "react-router-dom";
import Projects from "../Projects/Projects";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


export default App;

function App() {

    return (

        <div className="page">
            <div className="page__content">
                <Header/>
                <Routes>
                    <Route path="/projects"
                           element={<Projects/>}/>
                </Routes>
                <Footer/>
            </div>
        </div>
    )
};
