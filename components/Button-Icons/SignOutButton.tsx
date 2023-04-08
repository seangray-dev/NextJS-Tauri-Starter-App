import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import styles from 'styles/fontawesome.module.css';
import { signOut } from 'next-auth/react';

const SignOutButton = () => {
  return (
    <FontAwesomeIcon
      icon={faArrowRightFromBracket}
      className={`${styles.gray_400} text-xl cursor-pointer hover:text-white`}
      onClick={() => {
        signOut;
      }}
    />
  );
};

export default SignOutButton;
