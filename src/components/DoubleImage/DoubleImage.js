import React from "react";
import PropTypes from "prop-types";
import styles from "./doubleImage.module.css";

function DoubleImage(props) {
    // Sanity check for offset values
    if (
        (props.offset[0] > 0 && props.offset[1] < 0) ||
        (props.offset[1] > 0 && props.offset[0] < 0)
    ) {
        throw RangeError("DoubleImage.props.offset cannot be given both a positive and a negative number.");
    };

    // isBaseImageBigger will also evaluate to true in cases where both images are the same size
    const isBaseImageBigger = (props.offset[0] + props.offset[1]) >= 0;
    const absOffset = [Math.abs(props.offset[0]), Math.abs(props.offset[1])];
    const smallerImageFullStyle = { ...styles.smallerImage, top: `${absOffset[1]}px`, left: `${absOffset[0]}px` };

    const containerStyle = {
        ...((props.styles && props.styles.container) ? props.styles.container : {}),
        ...styles.doubleImageContainer
    };
    const baseImageStyle = {
        ...((props.styles && props.styles.baseImage) ? props.styles.baseImage : {}),
        ...(isBaseImageBigger ? styles.biggerImage : smallerImageFullStyle)
    };
    const coverImageStyle = {
        ...((props.styles && props.styles.coverImage) ? props.styles.coverImage : {}),
        ...(isBaseImageBigger ? smallerImageFullStyle : styles.biggerImage)
    };

    return (
        <div style={containerStyle}>
            <img
                src={props.images[0]}
                alt=""
                style={baseImageStyle}
            />
            <img
                src={props.images[1]}
                alt={props.alt}
                style={coverImageStyle}
            />
        </div>
    );
};

DoubleImage.propTypes = {
    images: PropTypes.array.isRequired,
    // offset refers to the offset of the second image from the first (this can be negative)
    offset: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    styles: PropTypes.shape({
        container: PropTypes.object,
        baseImage: PropTypes.object,
        coverImage: PropTypes.object
    }),
    alt: PropTypes.string
};

export default DoubleImage;
