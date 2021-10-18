import { NavLink } from 'react-router-dom';
import { routes } from '../../utils/routes';
import s from './UserMenu.module.css';

const styles = {
  link: {
    color: 'green',
    marginRight: '10px',
  },
  activeLink: {
    color: 'red',
  },
};

export default function Navigation() {
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
      <NavLink
        to={routes.contacts}
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        Contacts
      </NavLink>
    </nav>
  );
}
