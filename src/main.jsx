import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId='1058466567960-bktj95fu079mkhk41c4ldigvtm7u1g1m.apps.googleusercontent.com'>
    <StrictMode>
      <BrowserRouter>
      <App />
      </BrowserRouter>
  </StrictMode>
  </GoogleOAuthProvider>
  
  
)
