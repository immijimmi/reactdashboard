import React from "react";
import componentStyles from "../component.module.css"; 
import styles from "./notFound.module.css";

function NotFound() {
    const notFoundImageUrl = window.location.origin + "/res/notFound.png";
    const notFoundImage = require(notFoundImageUrl);

    const divStyle = {
        ...componentStyles.xCentredChildren,
        ...styles.bannerImage
    };

    return (
        <div style={divStyle}>
            <img src={notFoundImage} alt="Page not found" />
        </div>
    );
};

export default NotFound;
