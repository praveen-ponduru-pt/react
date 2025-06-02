import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './login.css'


function Login() {
    const [showSignIn, setShowSignIn] = useState(true);
    const [showSignUp, setShowSignUp] = useState(false);

    const toggleForms = (isSignIn: boolean) => {
        setShowSignIn(isSignIn);
        setShowSignUp(!isSignIn);
    }
    return (
        <>
            <div>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Login Page</h1>
            <div className='container'>
                <div className="buttons">
                    <button onClick={() => toggleForms(true)}>Sign In</button>
                    <button onClick={() => toggleForms(false)}>Sign Up</button>
                </div>

                {showSignIn && (
                    <div className='signInFields'>
                        <div>
                            <label htmlFor="username">Username:</label>
                            <input type="text" id="username" />
                        </div>
                        <div>
                            <label htmlFor="password">Password:</label>
                            <input type="text" id="password" />
                        </div>
                        <div id="rememberMe"><input type="checkbox" />Remember Me</div>
                        <a id='forget' href="#">Forgot Password?</a>
                        <button className='signInBtn'>Sign In</button>
                    </div>
                )}

                {showSignUp && (
                    <div className='signUpFields'>
                        <div>
                            <label htmlFor="username">Username:</label>
                            <input type="text" id="username" />
                        </div>
                        <div>
                            <label htmlFor="password">Password:</label>
                            <input type="text" id="password" />
                        </div>
                        <button className='signUpBtn'>Sign Up</button>
                    </div>
                )}
            </div>
        </>
    )
}

export default Login
