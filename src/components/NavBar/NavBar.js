import React from "react";
import { useNavigate } from "react-router-dom";
import componentStyles from "../component.module.css";
import styles from "./navBar.module.css";

function NavBar() {
    const navigate = useNavigate();

    var divClassName = `${componentStyles.rounded}`;
    divClassName += ` ${componentStyles.mediumMargin}`;
    divClassName += ` ${componentStyles.yCenteredChildren}`;
    divClassName += ` ${styles.headerBar}`;
    var buttonClassName = `${componentStyles.baseFont}`;
    buttonClassName += ` ${componentStyles.mediumFontSize}`;
    buttonClassName += ` ${componentStyles.rounded}`;
    buttonClassName += ` ${componentStyles.mediumMargin}`;
    buttonClassName += ` ${componentStyles.button}`;

    return (
        <div className={divClassName}>
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
