export const RegisterForm = () => {
    return (
        <form style={{ display: 'grid' }}>
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
