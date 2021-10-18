import { useEffect, Suspense, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router';
import { AppBar } from '../';
import { routes } from '../../utils/routes';
import s from './Wrapper.module.css';
import { authOperations } from '../../Redux/auth';

const HomeView = lazy(() => import('../../views/HomeView/HomeView'));
const ContactsView = lazy(() =>
  import('../../views/ContactsView/ContactsView'),
);
const AuthView = lazy(() => import('../../views/AuthView/AuthView'));
const SignupView = lazy(() => import('../../views/SignupView/SignupView'));

export default function Wrapper() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  return (
    <div className={s.wrapper}>
      <AppBar />
      <Switch>
        <Suspense fallback={<p>Loading...</p>}>
          <Route exact path={routes.home} component={HomeView} />
          <Route path={routes.register} component={SignupView} />
          <Route path={routes.login} component={AuthView} />
          <Route path={routes.contacts} component={ContactsView} />
        </Suspense>
      </Switch>
    </div>
  );
}
