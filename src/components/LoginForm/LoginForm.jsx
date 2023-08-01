// import { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';

const LoginForm = () => {
    const dispatch = useDispatch();
    // const [email, setEmail] = useState();
    // const [password, setPasswoed] = useState();

    const handleSubmit = event => {
        console.log('on submit');
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
        <Box
            content="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            // onSubmit={handleSubmit}
        >
            <form
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 20,
                    backgroundColor: 'white',
                }}
                onSubmit={handleSubmit}
            >
                <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    // defaultValue="Small"
                    size="small"
                    type="email"
                    name="email"
                    required
                    style={{ backgroundColor: 'white' }}
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Password"
                    // defaultValue="Hello World"
                    type="password"
                    name="password"
                    size="small"
                    style={{ backgroundColor: 'white' }}
                />
                {/* <button type="submit">Log In</button> */}
                <Button variant="contained" type="submit">
                    Log In
                </Button>
            </form>
        </Box>

        // <form style={{ display: 'grid' }} onSubmit={handleSubmit}>
        //     <label htmlFor="">
        //         Email
        //         <input type="email" name="email" />
        //     </label>
        //     <label htmlFor="">
        //         Password
        //         <input type="password" name="password" />
        //     </label>
        //     <button type="submit">Log In</button>
        // </form>
    );
};
export default LoginForm;
