import React from "react";

import "./NotFound.css"
import notFoundImage from "../../../res/notfound.png";

function NotFound() {
    return (
        <div className="bannerImage">
            <img src={notFoundImage} alt="Page not found" />
        </div>
    );
}

export default NotFound;
