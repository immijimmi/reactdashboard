import React from "react";
import PropTypes from "prop-types";
import DoubleImage from "../DoubleImage/DoubleImage";
import ImageWithText from "../ImageWithText/ImageWithText";

function NFTDisplay(props) {
    const nftOffset = [20, 20];
    const plaqueOffset = [0, 0];  // TODO

    function generatePlaqueText() {
        var result = "";
        var details = props.details || {};

        result += (details.name ? `'${details.name}'` : "Untitled") + "\n";
        result += (details.creator_name ? details.creator_name : "Unknown Artist") + "\n";
        result += (details.created_year ? details.created_year.toString() : "Unknown Year") + ", "
        result += (details.art_medium ? details.art_medium : "Digital")

        return result;
    };
    const plaqueText = generatePlaqueText();

    return (
        <div style={(props.styles && props.styles.container)}>
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
                />
            </div>
        </div>
    );
};

NFTDisplay.propTypes = {
    image: PropTypes.object.isRequired,
    frame: PropTypes.object.isRequired,
    plaque: PropTypes.object.isRequired,
    details: PropTypes.shape({
        name: PropTypes.string,
        created_year: PropTypes.number,
        creator_name: PropTypes.string,
        art_medium: PropTypes.string
    }),
    styles: PropTypes.shape({
        container: PropTypes.object
    })
};

export default NFTDisplay;
