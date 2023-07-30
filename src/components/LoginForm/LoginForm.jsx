export const LoginForm = () => {
    return (
        <form style={{ display: 'grid' }}>
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
