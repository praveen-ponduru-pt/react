import { useState, createContext, useContext } from 'react';
import LoginForm from './LoginForm'
import { AuthProvider } from '../contexts/AuthContext'
import Home from './Home'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AuthProvider>
      {isLoggedIn ? <Home setIsLoggedIn={setIsLoggedIn}></Home> : <LoginForm setIsLoggedIn={setIsLoggedIn}></LoginForm>}
    </AuthProvider>
    // <Calendar />
  )
}

export default App;