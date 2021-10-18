import AuthNav from './AuthNav';
import UserMenu from './UserMenu';
import { useSelector } from 'react-redux';
import authSelectors from '../../Redux/auth';

import s from './UserMenu.module.css';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header className={s.AppBar}>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
