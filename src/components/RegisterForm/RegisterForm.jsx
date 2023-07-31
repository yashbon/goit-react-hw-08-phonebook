import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';

export const RegisterForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.currentTarget;
        dispatch(
            register({
                name: form.elements.name.value,
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        );
        // form.reset();
    };

    return (
        <form style={{ display: 'grid' }} onSubmit={handleSubmit}>
            <label htmlFor="">
                UserName
                <input type="text" name="name" />
            </label>
            <label htmlFor="">
                Email
                <input type="email" name="email" />
            </label>
            <label htmlFor="">
                Password
                <input type="password" name="password" />
            </label>
            <button type="submit">Reggister</button>
        </form>
    );
};
