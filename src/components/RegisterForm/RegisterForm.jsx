import { Box, Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';

export const RegisterForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.currentTarget;

        console.log(form.elements.name.value);

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
                    // backgroundColor: 'white',
                }}
                onSubmit={handleSubmit}
            >
                <TextField
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    // defaultValue="Small"
                    name="name"
                    size="small"
                    type="name"
                    // required
                    // style={{ backgroundColor: 'white' }}
                />
                <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    // defaultValue="Small"
                    size="small"
                    type="email"
                    name="email"
                    required
                    // style={{ backgroundColor: 'white' }}
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Password"
                    // defaultValue="Hello World"
                    type="password"
                    name="password"
                    size="small"
                    // style={{ backgroundColor: 'white' }}
                />
                <Button variant="contained" type="submit">
                    Reggister
                </Button>
            </form>
        </Box>
    );
};
// {/* <Box
//     content="form"
//     sx={{
//         '& > :not(style)': { m: 1, width: '25ch' },
//     }}
//     noValidate
//     autoComplete="off"
//     // onSubmit={handleSubmit}
// >
//     <form
//         style={{
//             display: 'flex',
//             flexDirection: 'column',
//             gap: 20,
//             backgroundColor: 'white',
//         }}
//         onSubmit={handleSubmit}
//     >
//         <TextField
//             id="outlined-basic"
//             label="Email"
//             variant="outlined"
//             // defaultValue="Small"
//             size="small"
//             type="email"
//             name="email"
//             required
//             style={{ backgroundColor: 'white' }}
//         />
//         <TextField
//             required
//             id="outlined-required"
//             label="Password"
//             // defaultValue="Hello World"
//             type="password"
//             name="password"
//             size="small"
//             style={{ backgroundColor: 'white' }}
//         />
//         {/* <button type="submit">Log In</button> */}
//         // <Button variant="contained" type="submit">
//         //     Log In
//         // </Button>
// //     </form>
// // </Box>; */}
