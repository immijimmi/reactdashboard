import React, { useEffect } from "react";
import useSound from 'use-sound';
import DoubleImage from "../DoubleImage/DoubleImage"
import nftFrame from "../../../res/nfts/nftFrame.png";
import yerBaby from "../../../res/nfts/yer_baby.png";
import redApe from "../../../res/nfts/red_ape.png";
import music from "../../../res/Bach - Air on the G String.mp3"
import "./NFTGallery.css";

function NFTGallery() {
    const [play, { stop }] = useSound(music, {volume: 0.35});
    useEffect(() => {
        play();
        return () => stop();
    });

    const artPieces = [
        [yerBaby, "'yer babee' (2021, Paint.NET)"],
        [redApe, "'maroon monke' (2021, Paint.NET)"]
    ];

    function getDoubleImages() {
        var result = [];

        for (const [index, [image, description]] of artPieces.entries()) {
            result.push(
                <DoubleImage
                    images={[image, nftFrame]}
                    offset={[-20, -20]}
                    alt={description}
                    containerClassName="galleryItem"
                    key={index.toString()}
                />
            );
        }

        return result;
    }

    return (
        <div className="rounded galleryBackground">
            {
                getDoubleImages()
            }
        </div>
    );
}

export default NFTGallery;
