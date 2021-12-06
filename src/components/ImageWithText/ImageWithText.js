import React from "react";
import PropTypes from "prop-types";
import styles from "./imageWithText.module.css";

function ImageWithText(props) {
    const textDivFullStyle = {
        ...styles.textOverlayDiv,
        left: `${props.offset[0]}px`,
        top: `${props.offset[1]}px`
    };

    function getParagraphs() {
        var lines = props.text.split("\n")
        var result = [];

        lines.forEach((line) => {
            result.push(<p>{line}</p>)
        });

        return result;
    };

    return (
        <div style={styles.imageWithTextContainer}>
            <img src={props.image} alt={props.alt} />
            <div style={textDivFullStyle}>
                {
                    getParagraphs()
                }
            </div>
        </div>
    );
};

ImageWithText.propTypes = {
    image: PropTypes.object.isRequired,
    offset: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    text: PropTypes.string.isRequired,
    alt: PropTypes.string
};

export default ImageWithText;
