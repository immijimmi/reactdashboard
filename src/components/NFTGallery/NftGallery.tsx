import config from '../../config.json';
import { useEffect } from 'react';
import NftDisplay from '../NftDisplay/NftDisplay';
import componentStyles from '../component.module.css';
import styles from './nftGallery.module.css';

function NftGallery() {
    const audio = new Audio(config.resources.music.bach_air);
    audio.volume = 0.2;
    useEffect(() => {
        audio.play();
        return () => audio.pause();
    });

    let containerClassName = `${componentStyles.rounded} ${componentStyles.mediumMargin}`;
    containerClassName += ` ${styles.galleryBackground}`;

    function getGalleryItems() {
        const result = [];

        for (const [index, nftData] of Array.from(config.nfts.entries())) {
            result.push(
                <NftDisplay
                    image={nftData.image}
                    frame={config.resources.nft.frame}
                    plaque={config.resources.nft.plaque}
                    metadata={nftData}
                    key={index.toString()}
                    classNames={{
                        container: styles.galleryItem,
                    }}
                />
            );
        }

        return result;
    }

    return <div className={containerClassName}>{getGalleryItems()}</div>;
}

export default NftGallery;
