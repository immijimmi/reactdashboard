import React, { useEffect } from "react";
import useSound from "use-sound";
import nftFrame from "../../../res/nfts/nftFrame.png";
import nftPlaque from "../../../res/nfts/nftPlaque.png";
import yerBaby from "../../../res/nfts/yer_baby.png";
import redApe from "../../../res/nfts/red_ape.png";
import ponderin from "../../../res/nfts/ponderin.png";
import music from "../../../res/Bach - Air on the G String.mp3";
import NFTDisplay from "../NFTDisplay/NFTDisplay";
import componentStyles from "../component.module.css";
import styles from "./nftGallery.module.css";

function NFTGallery() {
    const [play, { stop }] = useSound(music, {volume: 0.25});
    useEffect(() => {
        play();
        return () => stop();
    });

    const divStyle = {
        ...componentStyles.rounded,
        ...componentStyles.mediumMargin,
        ...styles.galleryBackground
    };

    const nftData = [
        [
            yerBaby,
            {
                name: "yer babee",
                created_year: 2021,
                creator_name: "immijimmi",
                art_medium: "Paint.NET"
            }
        ],
        [
            redApe,
            {
                name: "maroon monke",
                created_year: 2021,
                creator_name: "immijimmi",
                art_medium: "Paint.NET"
            }
        ],
        [
            ponderin,
            {
                name: "Ponderin'",
                created_year: 2021,
                creator_name: "PolloTheChicken",
                art_medium: "MS Paint"
            }
        ]
    ];

    function getGalleryItems() {
        var result = [];

        for (const [index, [image, details]] of nftData.entries()) {
            result.push(
                <NFTDisplay
                    image={image}
                    details={details}
                    frame={nftFrame}
                    plaque={nftPlaque}
                    key={index.toString()}
                    style={styles.galleryItem}
                />
            );
        }

        return result;
    };

    return (
        <div style={divStyle}>
            {
                getGalleryItems()
            }
        </div>
    );
};

export default NFTGallery;
