import React, { use } from 'react'
import {BrowserRouter ,Router, Route, Link,useNavigate, Navigate} from 'react-router-dom'
// import { Login } from './pages/Login';

export const Home = () => {
    const navigate = useNavigate();
  function login(){
    navigate('/login');
  }
  return (
    <>
    <div>home page</div>
    <Link to="/login">Login</Link>
    <Link to="/signup">Signup</Link>
    </>
  )
}
