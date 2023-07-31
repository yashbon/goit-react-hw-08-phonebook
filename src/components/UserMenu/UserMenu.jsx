import { useAuth } from 'components/hooks/useAuth';

export const UserMenu = () => {
    console.log('User Menu');
    // const dispatch = useDispatch();
    const { user } = useAuth();
    return (
        <div style={{ display: 'flex', gap: 10 }}>
            <p style={{ margin: 0 }}>Hello, {user.name}!</p>
            <button style={{ height: 'fit-contant' }}>Logout</button>
        </div>
    );
};
