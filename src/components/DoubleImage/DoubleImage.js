import React from "react";
import PropTypes from 'prop-types';
import "./DoubleImage.css";

function DoubleImage(props) {
    // Sanity check for offset values
    if (
        (props.offset[0] > 0 && props.offset[1] < 0) ||
        (props.offset[1] > 0 && props.offset[0] < 0)
    ) {
        throw RangeError("DoubleImage.props.offset cannot be given both a positive and a negative number.")
    }

    // isFirstImageBigger will also evaluate to true in cases where both images are the same size
    const isFirstImageBigger = (props.offset[0] + props.offset[1]) >= 0;
    const absOffset = [Math.abs(props.offset[0]), Math.abs(props.offset[1])];

    const smallerImageStyle = { top: `${absOffset[1]}px`, left: `${absOffset[0]}px` }; 

    if (isFirstImageBigger) {
        return (
            <div className={`${props.containerClassName} doubleImageContainer`}>
                <img
                    src={props.images[0]}
                    className={`${props.firstClassName} biggerImage`}
                    alt=""
                />
                <img
                    src={props.images[1]}
                    className={`${props.secondClassName} smallerImage`}
                    style={smallerImageStyle}
                    alt={props.alt}
                />
            </div>
        );
    } else {
        return (
            <div className={`${props.containerClassName} doubleImageContainer`}>
                <img
                    src={props.images[0]}
                    className={`${props.firstClassName} smallerImage`}
                    style={smallerImageStyle}
                    alt=""
                />
                <img
                    src={props.images[1]}
                    className={`${props.secondClassName} biggerImage`}
                    alt={props.alt}
                />
            </div>
        );
    }
}

DoubleImage.propTypes = {
    images: PropTypes.array.isRequired,
    // offset refers to the offset of the second image from the first (this can be negative)
    offset: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    containerClassName: PropTypes.string,
    firstClassName: PropTypes.string,
    secondClassName: PropTypes.string,
    alt: PropTypes.string
}

export default DoubleImage;
