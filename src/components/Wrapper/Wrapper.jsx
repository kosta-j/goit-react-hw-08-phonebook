import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router';
import { AuthView } from '../../views';
import { ContactsView } from '../../views';
import { HomeView } from '../../views';
import { SignupView } from '../../views';
import { AppBar } from '../';
import { routes } from '../../utils/routes';
import s from './Wrapper.module.css';
import { authOperations } from '../../Redux/auth';

export default function Wrapper() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  return (
    <div className={s.wrapper}>
      <AppBar />
      <Switch>
        <Route path={routes.home} component={HomeView} exact />
        <Route path={routes.register} component={SignupView} />
        <Route path={routes.login} component={AuthView} />
        <Route path={routes.contacts} component={ContactsView} />
      </Switch>
    </div>
  );
}
