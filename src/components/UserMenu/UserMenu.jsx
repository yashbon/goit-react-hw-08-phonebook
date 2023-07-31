import { useAuth } from 'components/hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';

export const UserMenu = () => {
    console.log('User Menu');

    const dispatch = useDispatch();
    const { user } = useAuth();

    const handleLogOut = () => {
        console.log('click logout');
        dispatch(logOut());
    };
    return (
        <div style={{ display: 'flex', gap: 10 }}>
            <p style={{ margin: 0 }}>
                Hello, <b>{user.name}</b>!
            </p>
            <button style={{ height: 'fit-contant' }} onClick={handleLogOut}>
                Logout
            </button>
        </div>
    );
};
