import React from "react";
import componentStyles from "../component.module.css";
import styles from "./welcome.module.css";

function Welcome() {
    let containerClassName = `${componentStyles.rounded} ${componentStyles.mediumMargin}`;
    containerClassName += ` ${componentStyles.xCenteredChildren} ${styles.welcomeMessage}`;

    return (
        <div className={containerClassName}>
            Click a button up top to get started!
        </div>
    );
};

export default Welcome;
