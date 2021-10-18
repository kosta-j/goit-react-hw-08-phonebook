import { useEffect, Suspense, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router';
import { AppBar } from '../';
import { routes } from '../../utils/routes';
import s from './Wrapper.module.css';
import { authOperations } from '../../Redux/auth';
import PrivateRoute from '../PrivateRoute';
import PublicRoute from '../PublicRoute';

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
          <PublicRoute exact path={routes.home}>
            <HomeView />
          </PublicRoute>
          <PublicRoute path={routes.register} restricted>
            <SignupView />
          </PublicRoute>
          <PublicRoute path={routes.login} restricted>
            <AuthView />
          </PublicRoute>
          <PrivateRoute path={routes.contacts}>
            <ContactsView />
          </PrivateRoute>
        </Suspense>
      </Switch>
    </div>
  );
}
