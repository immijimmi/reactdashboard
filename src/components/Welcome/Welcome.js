import React from "react";
import componentStyles from "../component.module.css";
import styles from "./welcome.module.css";

function Welcome() {
    const divStyle = {
        ...componentStyles.rounded,
        ...componentStyles.mediumMargin,
        ...componentStyles.xCenteredChildren,
        ...styles.welcomeMessage
    };

    return (
        <div style={divStyle}>
            Click a button up top to get started!
        </div>
    );
};

export default Welcome;
