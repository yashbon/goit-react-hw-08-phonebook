import { useDispatch, useSelector } from 'react-redux';
import ContactList from './ConactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import { Route, Routes } from 'react-router-dom';
// import Home from './pages/Home';
import Layout from './Layuot/Leyout';
// import Register from './pages/Register';
// import { PublicRoute } from './PublicRoute';
import { lazy, useEffect } from 'react';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivatRoute';
import { useAuth } from './hooks/useAuth';

const Home = lazy(() => import('../components/pages/Home'));
const Register = lazy(() => import('../components/pages/Register'));
const Login = lazy(() => import('../components/pages/Login'));
const Contacts = lazy(() => import('../components/pages/Contacts'));

export const App = () => {
    // const { isLoading, error } = useSelector(state => state.contacts);
    const dispatch = useDispatch();
    // const { isRefreshing } = useAuth();

    useEffect(() => {
        //   dispatch(refreshUser());
    }, [dispatch]);

    return (
        // isRefreshing ? (
        //     <b>Refreshing user...</b>
        // ) : (
        <div
            style={{
                // height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                // fontSize: 40,
                color: '#010101',
                backgroundColor: 'lightsteelblue',
            }}
        >
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route
                        path="/register"
                        element={
                            <PublicRoute
                                redirectTo="/contacts"
                                component={<Register />}
                            />
                        }
                    />
                    <Route
                        path="/login"
                        element={
                            <PublicRoute
                                redirectTo="/contacts"
                                component={<Login />}
                            />
                        }
                    />
                    <Route
                        path="/contacts"
                        element={
                            <PrivateRoute
                                redirectTo="/login"
                                component={<Contacts />}
                            />
                        }
                    />
                </Route>
            </Routes>

            {/* O L D  ! ! !
            <h1>Phonebook</h1>
            <ContactForm />
            <h2>Contacts</h2>
            {isLoading && !error && (
                <>
                    <br />
                    <b>Request in progress...</b>
                    <br />
                </>
            )}
            <Filter />
            <ContactList /> */}
        </div>
    );
};
