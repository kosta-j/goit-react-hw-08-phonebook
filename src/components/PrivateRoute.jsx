import { Route, Redirect } from 'react-router';
import { useSelector } from 'react-redux';
import { routes } from '../utils/routes';
import authSelectors from '../Redux/auth';

export default function PrivateRoute({ children, ...routeProps }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Redirect to={routes.login} />}
    </Route>
  );
}
