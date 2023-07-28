import { useAuth } from 'hooks/';
import { Navigate } from 'react-router-dom';

/**
 * - If the route is restricted and the user is logged in, render a <Navigate> to redirectTo
 * - Otherwise render the component
 */

export const PublicRoute = ({ component: Component, redirectTo = '/' }) => {
<<<<<<< Updated upstream
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
=======
    const { isLoggedIn } = useAuth();

    return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
>>>>>>> Stashed changes
};
