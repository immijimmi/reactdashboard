import React, { useEffect } from "react";
import useSound from "use-sound";
import NFTDisplay from "../NFTDisplay/NFTDisplay";
import music from "../../res/bachAir.mp3";
import nftFrame from "../../res/nfts/nftFrame.png";
import nftPlaque from "../../res/nfts/nftPlaque.png";
import componentStyles from "../component.module.css";
import styles from "./nftGallery.module.css";

function NFTGallery() {
    const [play, { stop }] = useSound(music, {volume: 0.25});
    useEffect(() => {
        play();
        return () => stop();
    });

    const imageFilesContext = require.context('../../res', true, /\.(png|jpe?g)$/);
    const images = {};
    for (const imageContextUrl of imageFilesContext.keys()) {
        // Store images using their context-relative URLs as keys
        images[imageContextUrl] = imageFilesContext(imageContextUrl)["default"]
    }

    let divClassName = `${componentStyles.rounded} ${componentStyles.mediumMargin}`;
    divClassName += ` ${styles.galleryBackground}`;

    const nftData = [
        [
            images["./nfts/yer_baby.png"],
            {
                name: "yer babee",
                created_year: 2021,
                creator_name: "immijimmi",
                art_medium: "Paint.NET"
            }
        ],
        [
            images["./nfts/red_ape.png"],
            {
                name: "maroon monke",
                created_year: 2021,
                creator_name: "immijimmi",
                art_medium: "Paint.NET"
            }
        ],
        [
            images["./nfts/ponderin.png"],
            {
                name: "Ponderin'",
                created_year: 2021,
                creator_name: "PolloTheChicken",
                art_medium: "MS Paint"
            }
        ]
    ];

    function getGalleryItems() {
        const result = [];

        for (const [index, [image, details]] of nftData.entries()) {
            result.push(
                <NFTDisplay
                    image={image}
                    details={details}
                    frame={nftFrame}
                    plaque={nftPlaque}
                    key={index.toString()}
                    classNames={{
                        container: styles.galleryItem
                    }}
                />
            );
        }

        return result;
    };

    return (
        <div className={divClassName}>
            {
                getGalleryItems()
            }
        </div>
    );
};

export default NFTGallery;
