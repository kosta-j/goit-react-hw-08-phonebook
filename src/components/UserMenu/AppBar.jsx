import AuthNav from './AuthNav';
import UserMenu from './UserMenu';
import Navigation from './Navigation';

import { useSelector } from 'react-redux';
import authSelectors from '../../Redux/auth';

import s from './UserMenu.module.css';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header className={s.AppBar}>
      <div className={s.headerWrapper}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>
    </header>
  );
}
