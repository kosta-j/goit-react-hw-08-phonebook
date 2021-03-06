import { useDispatch, useSelector } from 'react-redux';
import authSelectors from '../../Redux/auth';
import { authOperations } from '../../Redux/auth';
import { Button } from '@mui/material';

import s from './UserMenu.module.css';
import defaultAvatar from './defaultAvatar.jpg';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  const avatar = defaultAvatar;

  return (
    <div className={s.userMenuContainer}>
      <img src={avatar} width="30" alt="" className={s.avatar} />
      <span>Wellcome, {name}</span>
      <Button
        sx={{ marginLeft: 1 }}
        color="inherit"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Logout
      </Button>
    </div>
  );
}
