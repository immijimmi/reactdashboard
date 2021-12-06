import React from "react";
import PropTypes from "prop-types";
import styles from "./imageWithText.module.css";

function ImageWithText(props) {
    let textDivClassName = styles.textOverlayDiv;
    textDivClassName += props.classNames?.text ? ` ${props.classNames.text}` : "";
    const textDivStyle = {
        left: `${props.offset[0]}px`,
        top: `${props.offset[1]}px`
    };

    return (
        <div className={styles.imageWithTextContainer}>
            <img src={props.image} alt={props.alt} />
            <div className={textDivClassName} style={textDivStyle}>
                { props.text }
            </div>
        </div>
    );
};

ImageWithText.propTypes = {
    image: PropTypes.string.isRequired,
    offset: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    text: PropTypes.string.isRequired,
    alt: PropTypes.string,
    classNames: PropTypes.shape({
        text: PropTypes.string
    })
};

export default ImageWithText;
