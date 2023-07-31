import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';

export const LoginForm = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState();
    const [password, setPasswoed] = useState();

    const handleSubmit = event => {
        event.preventDefault();

        const form = event.currentTarget;
        dispatch(
            logIn({
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        );
        //   setEmail('');
        //   setPassword('');
        form.reset();
    };
    return (
        <form style={{ display: 'grid' }} onSubmit={handleSubmit}>
            <label htmlFor="">
                Email
                <input type="email" name="email" />
            </label>
            <label htmlFor="">
                Password
                <input type="password" name="password" />
            </label>
            <button type="submit">Log In</button>
        </form>
    );
};
