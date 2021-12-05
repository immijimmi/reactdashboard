import React from "react";
import componentStyles from "../Component.module.css";
import styles from "./Welcome.module.css";

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
