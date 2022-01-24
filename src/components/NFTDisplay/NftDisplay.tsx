import DoubleImage from '../DoubleImage/DoubleImage';
import ImageWithText from '../ImageWithText/ImageWithText';
import componentStyles from '../component.module.css';
import styles from './nftDisplay.module.css';

interface NftDisplayProps {
    image: string;
    frame: string;
    plaque: string;
    metadata?: {
        name?: string;
        created_year?: number;
        creator_name?: string;
        art_medium?: string;
    };
    classNames?: {
        container?: string;
    };
}

function NftDisplay({ image, frame, plaque, metadata, classNames }: NftDisplayProps) {
    // NFT images are assumed to be 256x256, with the frames 40px taller and wider
    const nftOffset = [-20, -20];
    const plaqueOffset = [22, 17];

    function generatePlaqueText() {
        let result = '';

        result += (metadata?.name ?? 'Untitled') + '\n';
        result += (metadata?.creator_name ?? 'Unknown Artist') + '\n';
        result += (metadata?.created_year ? metadata.created_year.toString() : 'Unknown Year') + ', ';
        result += metadata?.art_medium ?? 'Digital';

        return result;
    }
    const plaqueText = generatePlaqueText();
    const plaqueTextClassName = `${componentStyles.baseFont} ${styles.plaqueText}`;

    return (
        <div className={classNames?.container}>
            <DoubleImage images={[image, frame]} offset={nftOffset} alt={plaqueText} />
            <ImageWithText
                image={plaque}
                offset={plaqueOffset}
                text={plaqueText}
                alt="NFT plaque"
                classNames={{
                    text: plaqueTextClassName,
                    container: styles.plaque,
                }}
            />
        </div>
    );
}

export default NftDisplay;
