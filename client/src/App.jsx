import React, { useState } from 'react'
import { BrowserRouter, Router, Route, Link, useNavigate, Navigate, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import {Signup} from './pages/Signup'
import { PornHubDashboard } from './pages/PornHubDashboard '

const App = () => {

  const [user, setUser] = useState(null)
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login  setUser={setUser}/>} />
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/dashboard' element={<PornHubDashboard user={user}/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App