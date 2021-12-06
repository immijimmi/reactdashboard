import React from "react";
import componentStyles from "../component.module.css";
import styles from "./welcome.module.css";

function Welcome() {
    var divClassName = `${componentStyles.rounded}`;
    divClassName += ` ${componentStyles.mediumMargin}`;
    divClassName += ` ${componentStyles.xCenteredChildren}`;
    divClassName += ` ${styles.welcomeMessage}`;

    return (
        <div className={divClassName}>
            Click a button up top to get started!
        </div>
    );
};

export default Welcome;
