import React from "react";
import { useNavigate } from "react-router-dom";
import componentStyles from "../component.module.css";
import styles from "./navBar.module.css";

function NavBar() {
    const navigate = useNavigate();

    const divStyle = {
        ...componentStyles.rounded,
        ...componentStyles.mediumMargin,
        ...componentStyles.yCenteredChildren,
        ...styles.headerBar
    };
    const buttonStyle = {
        ...componentStyles.baseFont,
        ...componentStyles.mediumFontSize,
        ...componentStyles.rounded,
        ...componentStyles.mediumMargin,
        ...componentStyles.button,
    };

    return (
        <div style={divStyle}>
            <button style={buttonStyle} onClick={() => navigate("/")}>
                Home
            </button>
            <button style={buttonStyle} onClick={() => navigate("/nftbro")}>
                NFT Gallery
            </button>
        </div>
    );
};

export default NavBar;
