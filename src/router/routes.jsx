import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Header } from '../components/Header'
import Login from "../pages/log"
import App from "../pages/home"

export const Root = () => {
  return (
    <Router>
        <Header/>
        <Routes>
            <Route path='/' element={<App />}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='*' element={<h1>Not Found 404</h1>}/>
        </Routes>
    </Router>
  )
}
