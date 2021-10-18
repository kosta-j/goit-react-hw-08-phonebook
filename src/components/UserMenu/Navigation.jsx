import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { routes } from '../../utils/routes';
import authSelectors from '../../Redux/auth';
import s from './UserMenu.module.css';

const styles = {
  link: {
    marginRight: '10px',
  },
  activeLink: {
    color: 'red',
  },
};

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav className={s.navContainer}>
      <NavLink
        exact
        to={routes.home}
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to={routes.contacts}
          style={styles.link}
          activeStyle={styles.activeLink}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
}
