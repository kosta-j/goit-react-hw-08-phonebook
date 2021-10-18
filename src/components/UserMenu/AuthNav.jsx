import { NavLink } from 'react-router-dom';
import { routes } from '../../utils/routes';
import s from './UserMenu.module.css';

const styles = {
  link: {
    marginLeft: '10px',
  },
  activeLink: {
    color: 'red',
  },
};

export default function AuthNav() {
  return (
    <div className={s.container}>
      <NavLink
        to={routes.register}
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        Sign up
      </NavLink>
      <NavLink
        to={routes.login}
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        Log in
      </NavLink>
    </div>
  );
}
