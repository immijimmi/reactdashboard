import config from '../../config.json';
import componentStyles from '../component.module.css';
import styles from './notFound.module.css';

function NotFound() {
    const containerClassName = `${componentStyles.xCentredChildren} ${styles.bannerImage}`;

    return (
        <div className={containerClassName}>
            <img src={config.resources.not_found} alt="Page not found" />
        </div>
    );
}

export default NotFound;
