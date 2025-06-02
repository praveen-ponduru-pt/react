import { FormEvent, useState } from "react";
import './loginForm.css';

function LoginForm() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [errors, setErrors] = useState({
        username: '',
        password: ''
    });
    console.log(errors.username, errors.password)

    const [isSubmitted, setSubmitted] = useState(false);

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    }
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }


    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        console.log(errors.username, errors.password)

        if (!username)
            setErrors({
                username: 'Username cannot be empty',
                password: errors.password
            })
        console.log(errors.username, errors.password)
        if (!password) {
            setErrors({
                username: errors.username,
                password: 'Password cannot be empty'
            })
        } else if (password.length < 8) {
            setErrors({
                username: errors.username,
                password: 'Password must be at least 8 characters'
            })
        }
    };

    const resetErrors = () => {
        setUsername('');
        setPassword('');
        setErrors({
            username: '',
            password: ''
        })
    }

    return (
        <div>
            <title>User Login Functionality</title>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
                <div><label>Username</label>
                    <input type="text" name="username" value={username} onChange={handleUsernameChange} />
                </div>
                {/* {isSubmitted && (<div id="usernameError" className="error">{errors.username}</div>)} */}
                <div><label>Password</label>
                    <input type="password" name="password" value={password} onChange={handlePasswordChange} />
                    <span className="password-toggle-icon"><i className="fas fa-eye"></i></span>
                </div>
                {/* {isSubmitted && (<div id="passwordError" className="error">{errors.password}</div>)} */}
                <div>
                    <button type="submit">Login</button>
                    <button type="reset" /*onClick={resetErrors}*/>Reset</button>
                </div>

            </form>
        </div>
    )
}

export default LoginForm;