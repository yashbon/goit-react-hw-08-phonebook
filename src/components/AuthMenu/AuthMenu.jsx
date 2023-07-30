import { NavLink } from 'react-router-dom';

export const AuthMenu = () => {
    console.log('Authentication Menu');
    return (
        <div style={{ display: 'flex', gap: 10 }}>
            <NavLink
                //  className={css.link}
                to="/register"
            >
                Register
            </NavLink>
            <NavLink
                //  className={css.link}
                to="/login"
            >
                Log In
            </NavLink>
        </div>
    );
};
