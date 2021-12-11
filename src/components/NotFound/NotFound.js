import React from "react";
import notFoundImage from "../../res/notFound.png";
import componentStyles from "../component.module.css"; 
import styles from "./notFound.module.css";

function NotFound() {
    const containerClassName = `${componentStyles.xCentredChildren} ${styles.bannerImage}`;

    return (
        <div className={containerClassName}>
            <img src={notFoundImage} alt="Page not found" />
        </div>
    );
};

export default NotFound;
