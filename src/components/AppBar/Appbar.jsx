import { AuthMenu } from 'components/AuthMenu/AuthMenu';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';

const AppBar = () => {
    // const { isLoggedIn } = useAuth();
    return (
        <header style={{ display: 'flex', gap: 10 }}>
            <Navigation />
            {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
            {false ? <UserMenu /> : <AuthMenu />}
        </header>
    );
};

export { AppBar };
