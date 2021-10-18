import { useDispatch, useSelector } from 'react-redux';
import authSelectors from '../../Redux/auth';
import { authOperations } from '../../Redux/auth';

import s from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  return (
    <div className={s.container}>
      <img src="/" alt="avatar" className={s.avatar} />
      <span>Wellcome, {name}</span>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Log out
      </button>
    </div>
  );
}
