const { LoginForm } = require('components/LoginForm/LoginForm');

function Login(params) {
    console.log('Login Page');
    return (
        <>
            <LoginForm />
        </>
    );
}

export default Login;
