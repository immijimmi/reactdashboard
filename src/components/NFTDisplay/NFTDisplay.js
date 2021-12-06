import React from "react";
import PropTypes from "prop-types";
import DoubleImage from "../DoubleImage/DoubleImage";
import ImageWithText from "../ImageWithText/ImageWithText";
import styles from "./nftDisplay.module.css";

function NFTDisplay(props) {
    const nftOffset = [-20, -20];
    const plaqueOffset = [20, 18];

    function generatePlaqueText() {
        let result = "";

        const details = props.details ?? {};
        result += (details.name ?? "Untitled") + "\n";
        result += (details.creator_name ?? "Unknown Artist") + "\n";
        result += (details.created_year ? details.created_year.toString() : "Unknown Year") + ", "
        result += (details.art_medium ?? "Digital")

        return result;
    };
    const plaqueText = generatePlaqueText();

    return (
        <div className={props.classNames?.container}>
            <div>
                <DoubleImage
                    images={[props.image, props.frame]}
                    offset={nftOffset}
                    alt={plaqueText}
                />
            </div>
            <div>
                <ImageWithText
                    image={props.plaque}
                    offset={plaqueOffset}
                    text={plaqueText}
                    alt="NFT plaque"
                    classNames={{
                        text: styles.plaque
                    }}
                />
            </div>
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
