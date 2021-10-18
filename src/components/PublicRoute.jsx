import { Route, Redirect } from 'react-router';
import { useSelector } from 'react-redux';
import { routes } from '../utils/routes';
import authSelectors from '../Redux/auth';

export default function PublicRoute({
  children,
  restricted = false,
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Redirect to={routes.home} /> : children}
    </Route>
  );
}
