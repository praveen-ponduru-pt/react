import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './loginForm.css'
// import App from './login'
import LoginForm from './loginForm'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LoginForm />
  </StrictMode>,
)
