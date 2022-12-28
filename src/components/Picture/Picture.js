import "Picture.scss";
import {useContext} from "react";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function Picture({pic}) {
    return (
        <li className="pic">
            <img className="pic__content" alt="pic.name"
                 src={pic.link}/></li>
    );
}

export default Picture;