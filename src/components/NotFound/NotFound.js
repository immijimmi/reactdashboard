import React from "react";
import notFoundImage from "../../../res/notfound.png";
import componentStyles from "../component.module.css"; 
import styles from "./notFound.module.css";

function NotFound() {
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
