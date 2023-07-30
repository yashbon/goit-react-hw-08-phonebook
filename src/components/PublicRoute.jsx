// import { useAuth } from 'hooks/';
import { Navigate } from 'react-router-dom';

/**
 * - If the route is restricted and the user is logged in, render a <Navigate> to redirectTo
 * - Otherwise render the component
 */

export const PublicRoute = ({ component: Component, redirectTo = '/' }) => {
    // const { isLoggedIn } = useAuth();

    // return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
    return false ? <Navigate to={redirectTo} /> : Component;
};
