import React from 'react'
import { BrowserRouter, Router, Route, Link, useNavigate, Navigate, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Login } from './pages/Login'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App