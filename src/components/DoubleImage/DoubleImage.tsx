import styles from './doubleImage.module.css';

interface DoubleImageProps {
    // offset refers to the offset of the second image from the first (this can be negative)
    offset: number[];
    images: string[];
    alt?: string;
}

function DoubleImage({ offset, images, alt }: DoubleImageProps) {
    // Sanity check for offset values
    if ((offset[0] > 0 && offset[1] < 0) || (offset[1] > 0 && offset[0] < 0)) {
        throw RangeError('DoubleImage.props.offset cannot be given both a positive and a negative number.');
    }

    // isBaseImageBigger will also evaluate to true in cases where both images are the same size
    const isBaseImageBigger = offset[0] + offset[1] >= 0;
    const absOffset = [Math.abs(offset[0]), Math.abs(offset[1])];
    const smallerImageStyle = {
        top: `${absOffset[1]}px`,
        left: `${absOffset[0]}px`,
    };

    const containerClassName = styles.doubleImageContainer;

    const baseImageClassName = `${isBaseImageBigger ? styles.biggerImage : styles.smallerImage}`;
    const baseImageStyle = {
        ...(isBaseImageBigger ? {} : smallerImageStyle),
    };

    const coverImageClassName = `${isBaseImageBigger ? styles.smallerImage : styles.biggerImage}`;
    const coverImageStyle = {
        ...(isBaseImageBigger ? smallerImageStyle : {}),
    };

    return (
        <div className={containerClassName}>
            <img src={images[0]} alt="" className={baseImageClassName} style={baseImageStyle} />
            <img src={images[1]} alt={alt} className={coverImageClassName} style={coverImageStyle} />
        </div>
    );
}

export default DoubleImage;
