import styles from './imageWithText.module.css';

interface ImageWithTextProps {
    image: string;
    offset: number[];
    text: string;
    alt?: string;
    classNames?: {
        text?: string;
        container?: string;
    };
}

function ImageWithText({ image, offset, text, alt, classNames }: ImageWithTextProps) {
    let containerClassName = styles.imageWithTextContainer;
    containerClassName += classNames?.container ? ` ${classNames.container}` : '';

    let textDivClassName = styles.textOverlayDiv;
    textDivClassName += classNames?.text ? ` ${classNames.text}` : '';
    const textDivStyle = {
        left: `${offset[0]}px`,
        top: `${offset[1]}px`,
    };

    return (
        <div className={containerClassName}>
            <img src={image} alt={alt} />
            <div className={textDivClassName} style={textDivStyle}>
                {text}
            </div>
        </div>
    );
}

export default ImageWithText;
