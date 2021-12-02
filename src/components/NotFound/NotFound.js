import React from "react";
import notFoundImage from "../../../res/notfound.png";
import "./NotFound.css"

function NotFound() {
    return (
        <div className="bannerImage">
            <img src={notFoundImage} alt="Page not found" />
        </div>
    );
}

export default NotFound;
