import { useAuth } from 'components/hooks/useAuth';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
    const { isLoggedIn } = useAuth();
    console.log(isLoggedIn);
    // const { isLoggedIn } = true; // T M P

    return (
        <nav style={{ display: 'flex', gap: 10 }}>
            <NavLink to="/">Home</NavLink>
            {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
            {/* {false && <NavLink to="/contacts">Contacts</NavLink>} */}
        </nav>
    );
};
