import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Header } from '../components/Header'
import Login from "../pages/log"
import App from "../pages/home"
import NotFound from '../pages/error'

export const Root = () => {
  return (
    <Router>
        <Header/>
        <Routes>
            <Route path='/' element={<App />}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='*' element={<NotFound/>}/>
        </Routes>
    </Router>
  )
}
