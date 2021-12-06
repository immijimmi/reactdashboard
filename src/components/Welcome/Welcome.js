import React from "react";
import componentStyles from "../component.module.css";
import styles from "./welcome.module.css";

function Welcome() {
    let divClassName = `${componentStyles.rounded} ${componentStyles.mediumMargin}`;
    divClassName += ` ${componentStyles.xCenteredChildren} ${styles.welcomeMessage}`;

    return (
        <div className={divClassName}>
            Click a button up top to get started!
        </div>
    );
};

export default Welcome;
