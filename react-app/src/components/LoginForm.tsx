import { FormEvent, useState } from "react"
import { useAuth } from "../contexts/AuthContext";
import '../css/LoginForm.css'

const LoginForm = ({ setIsLoggedIn }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const { login } = useAuth();

    const [errors, setErrors] = useState({ username: '', password: '' })

    const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    }
    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const validateForm = () => {

        let isValid = true;
        if (!username) {
            setErrors((prevErrors) => ({ ...prevErrors, username: 'Username cannot be empty' }));
            isValid = false;
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, username: '' }));
        }

        if (!password) {
            setErrors((prevErrors) => ({ ...prevErrors, password: 'Password cannot be empty' }));
            isValid = false;
        } else if (password.length < 8) {
            setErrors((prevErrors) => ({ ...prevErrors, password: 'Password must be at least 8 characters' }));
            isValid = false;
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, password: '' }));
        }

        return isValid;
    }
    const togglePassword = () => {
        setIsPasswordVisible((prevState) => !prevState);
    }
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (validateForm()) {
            login(username, password);
            setIsLoggedIn(true);
        }
    }

    const resetForm = () => {
        setUsername('');
        setPassword('');
        setErrors({ username: '', password: '' });
    }

    return (
        <>
            <div className="main-content">
                <div className="login-container">
                    <h1>Login</h1>
                    <form id="loginForm" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Username</label>
                            <input type="text" id="username" name="username" value={username} onChange={handleUsername} />
                            <div className="error" id="usernameError">{errors.username}</div>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <div className="password-container">
                                <input type={isPasswordVisible ? 'text' : 'password'} id="password" name="password"
                                    value={password} onChange={handlePassword} />
                                <span className="toggle-password" onClick={togglePassword}>{isPasswordVisible ? '👁️' : '👁️‍🗨️'}</span>
                            </div>
                            <div className="error" id="passwordError">{errors.password}</div>
                        </div>
                        <div className="buttons">
                            <button type="submit" className="login-btn">Login</button>
                            <button type="button" className="reset-btn" onClick={resetForm}>Reset</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
};

export default LoginForm;