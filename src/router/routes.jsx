import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Header } from '../components/Header'
import Login from "../pages/log"
import App from "../pages/home"
import NotFound from '../pages/error'
import { Cart } from '../pages/cart'

export const Root = () => {
  
  return (
    <Router>
        <Routes>
            <Route path='/' element={<><Header/><App/></>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/cart' element={<><Header/> <Cart/></>}/>
            <Route path='*' element={<NotFound/>}/>
        </Routes>
    </Router>
  )
}
