import React from "react";
import { useNavigate } from "react-router-dom";
import "../Component.css";
import "./NavBar.css"

function NavBar() {
    const navigate = useNavigate();

    const buttonClasses = "baseFont rounded button"

    return (
        <div className="rounded yCenteredChildren headerBar">
            <button className={buttonClasses} onClick={() => navigate("/")}>
                Home
            </button>
            <button className={buttonClasses} onClick={() => navigate("/nftbro")}>
                Ebic NFT Gallery
            </button>
            <button className={buttonClasses} onClick={() => navigate("/notfound")}>
                ?
            </button>
        </div>
    );
}

export default NavBar;
