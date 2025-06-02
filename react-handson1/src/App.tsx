import { FormEvent, useState } from 'react'
import './App.css'
import Header from './Header';
import Footer from './Footer';

function App() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [errors, setErrors] = useState({ username: '', password: '' });

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  }
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }

  // const togglePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   if (event.type === 'password') {
  //     event.type = 'text';
  //     toggleIcon.textContent = '👁️‍🗨️';
  //   } else {
  //     event.type = 'password';
  //     toggleIcon.textContent = '👁️';
  //   }
  // }

  const resetForm = () => {
    console.log(username, password);
    setUsername('');
    setPassword('');
    console.log(username, password);
    setErrors({ username: '', password: '' });
  }

  const isValidUsername = () => {
    if (!username) {
      setErrors({ username: 'Username cannot be empty', password: errors.password })
      return false;
    }
  }

  const isValidPassword = () => {
    if (!password) {
      setErrors({ username: errors.username, password: 'Password cannot be empty' });
      return false;
    } else if (password.length < 8) {
      setErrors({ username: errors.username, password: 'Password must be at least 8 characters' });
      return false;
    }
  }

  const validateForm = (e: FormEvent) => {
    e.preventDefault();
    setErrors({ username: '', password: '' })
    isValidUsername()
    isValidPassword()
  }


  return (
    <>
      < Header />

      <div className="main-content">
        <div className="login-container">
          <h1>Login</h1>
          <form id="loginForm" onSubmit={validateForm}>
            <div className="form-group">
              <label>Username</label>
              <input type="text" id="username" name="username" onChange={handleUsernameChange} />
              {!isValidUsername && (<div className="error" id="usernameError">{errors.username}</div>)}
            </div>
            <div className="form-group">
              <label >Password</label>
              <div className="password-container">
                <input type="password" id="password" name="password" onChange={handlePasswordChange} />
                <span className="toggle-password" onClick={() => { }}>👁️</span>
              </div>
              {!isValidPassword && (<div className="error" id="passwordError">{errors.password}</div>)}
            </div>
            <div className="buttons">
              <button type="submit" className="login-btn">Login</button>
              <button type="button" className="reset-btn" onClick={resetForm}>Reset</button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default App
