import React from "react";
import { useNavigate } from "react-router-dom";
import componentStyles from "../component.module.css";
import styles from "./navBar.module.css";

function NavBar() {
    const navigate = useNavigate();

    let containerClassName = `${componentStyles.rounded} ${componentStyles.mediumMargin}`;
    containerClassName += ` ${componentStyles.yCenteredChildren} ${styles.headerBar}`;
    let buttonClassName = `${componentStyles.baseFont} ${componentStyles.mediumFontSize}`;
    buttonClassName += ` ${componentStyles.rounded} ${componentStyles.mediumMargin}`;
    buttonClassName += ` ${componentStyles.button}`;

    return (
        <div className={containerClassName}>
            <button className={buttonClassName} onClick={() => navigate("/")}>
                Home
            </button>
            <button className={buttonClassName} onClick={() => navigate("/nftbro")}>
                NFT Gallery
            </button>
        </div>
    );
};

export default NavBar;
