import React, { useEffect } from "react";
import useSound from "use-sound";
import NFTDisplay from "../NFTDisplay/NFTDisplay";
import componentStyles from "../component.module.css";
import styles from "./nftGallery.module.css";

function NFTGallery() {
    const musicUrl = window.location.origin + "/res/bachAir.mp3";
    const music = require(musicUrl);
    const [play, { stop }] = useSound(music, {volume: 0.25});
    useEffect(() => {
        play();
        return () => stop();
    });

    const nftFrameUrl = window.location.origin + "/res/nfts/nftFrame.png";
    const nftFrame = require(nftFrameUrl);
    const nftPlaqueUrl = window.location.origin + "/res/nfts/nftFrame.png";
    const nftPlaque = require(nftPlaqueUrl);

    const yerBabyUrl = window.location.origin + "/res/nfts/yer_baby.png";
    const yerBaby = require(yerBabyUrl);
    const redApeUrl = window.location.origin + "/res/nfts/red_ape.png"
    const redApe = require(redApeUrl);
    const ponderinUrl = window.location.origin + "/res/nfts/ponderin.png";
    const ponderin = require(ponderinUrl);

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
