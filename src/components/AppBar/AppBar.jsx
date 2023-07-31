import { AuthMenu } from 'components/AuthMenu/AuthMenu';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'components/hooks/useAuth';

const AppBar = () => {
    const { isLoggedIn } = useAuth();
    console.log(isLoggedIn);
    console.log(useAuth());
    return (
        <header style={{ display: 'flex', gap: 10 }}>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthMenu />}
            {/* {false ? <UserMenu /> : <AuthMenu />} */}
        </header>
    );
};

export { AppBar };
