import React from "react";
import DoubleImage from "../DoubleImage/DoubleImage"
import nftFrame from "../../../res/nfts/nftFrame.png";
import yerBaby from "../../../res/nfts/yer_baby.png";
import "./NFTGallery.css";

function NFTGallery() {
    return (
        <div className="rounded galleryBackground">
            <DoubleImage images={[yerBaby, nftFrame]} offset={[-20, -20]} alt="'yer baby' (2021, Paint.NET)" containerClassName="galleryItem" />
        </div>
    );
}

export default NFTGallery;
