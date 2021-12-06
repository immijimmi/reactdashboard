import React from "react";
import notFoundImage from "../../res/notFound.png";
import componentStyles from "../component.module.css"; 
import styles from "./notFound.module.css";

function NotFound() {
    let divClassName = `${componentStyles.xCentredChildren}`;
    divClassName += ` ${styles.bannerImage}`;

    return (
        <div className={divClassName}>
            <img src={notFoundImage} alt="Page not found" />
        </div>
    );
};

export default NotFound;
