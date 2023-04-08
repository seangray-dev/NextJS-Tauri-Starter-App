import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import styles from 'styles/fontawesome.module.css';

const NotificationsButton = () => {
  return (
    <FontAwesomeIcon
      icon={faBell}
      className={`${styles.gray_400} text-xl cursor-pointer hover:text-white`}
    />
  );
};

export default NotificationsButton;
