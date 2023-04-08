import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import styles from 'styles/fontawesome.module.css';

const SettingsButton = () => {
  return (
    <FontAwesomeIcon
      icon={faGear}
      className={`${styles.gray_400} ${styles['hover-spin']} text-xl cursor-pointer`}
    />
  );
};

export default SettingsButton;
