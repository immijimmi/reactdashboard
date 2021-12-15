import React from "react";
import PropTypes from "prop-types";
import DoubleImage from "../DoubleImage/DoubleImage";
import ImageWithText from "../ImageWithText/ImageWithText";
import componentStyles from "../component.module.css";
import styles from "./nftDisplay.module.css";

function NFTDisplay(props) {
    const nftOffset = [-20, -20];
    const plaqueOffset = [22, 17];

    function generatePlaqueText() {
        let result = "";

        let details = props.details ?? {};
        result += (details.name ?? "Untitled") + "\n";
        result += (details.creator_name ?? "Unknown Artist") + "\n";
        result += (details.created_year ? details.created_year.toString() : "Unknown Year") + ", "
        result += (details.art_medium ?? "Digital")

        return result;
    };
    const plaqueText = generatePlaqueText();
    const plaqueTextClassName = `${componentStyles.baseFont} ${styles.plaqueText}`;

    return (
        <div className={props.classNames?.container}>
            <DoubleImage
                images={[props.image, props.frame]}
                offset={nftOffset}
                alt={plaqueText}
            />
            <ImageWithText
                image={props.plaque}
                offset={plaqueOffset}
                text={plaqueText}
                alt="NFT plaque"
                classNames={{
                    text: plaqueTextClassName,
                    container: styles.plaque
                }}
            />
        </div>
    );
};

NFTDisplay.propTypes = {
    image: PropTypes.string.isRequired,
    frame: PropTypes.string.isRequired,
    plaque: PropTypes.string.isRequired,
    details: PropTypes.shape({
        name: PropTypes.string,
        created_year: PropTypes.number,
        creator_name: PropTypes.string,
        art_medium: PropTypes.string
    }),
    classNames: PropTypes.shape({
        container: PropTypes.string
    })
};

export default NFTDisplay;
