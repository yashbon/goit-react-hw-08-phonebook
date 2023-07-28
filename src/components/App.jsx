import { Route, Routes } from 'react-router-dom';
import ContactList from './ConactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import Layout from './Layuot/Leyout';
import Home from './pages/Home';
import { PublicRoute } from './PublicRoute';
import Register from './pages/Register';
import { PrivateRoute } from './PrivatRoute';
import Contacts from './pages/Contacts';

export const App = () => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#010101',
            }}
        >
            <h1>Phonebook</h1>
            {/* <ContactForm />
            <h2>Contacts</h2>
            <Filter />
            <ContactList /> */}
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
        </div>
    );
};
