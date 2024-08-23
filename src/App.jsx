import React from 'react'
import Nav from './Components/Nav'
import Page from './Components/Page'
import Dashboard from './Components/Dashboard'
import Login from './Components/Login'
import { Routes, Route, useLocation } from 'react-router-dom'

function App() {
  const location = useLocation();

  return (
    <div>
      <Nav />
      {location.pathname !== '/dashboard' && <Page />}
      {/* {location.pathname !== '/login' && <Login />} */}
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        
      </Routes>
    </div>
  )
}

export default App
