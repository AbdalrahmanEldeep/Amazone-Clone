import React, { createContext, useContext, useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Header } from '../components/Header'
import Login from "../pages/log"
import App from "../pages/home"
import NotFound from '../pages/error'
import { Cart } from '../pages/cart'

const productsContext = createContext();

export const Root = () => {
  const [data,setData] = useState([]);
  const [productStatusLoader,setProductStatus] = useState(false);
  const [dataFilter,setDataFilter] = useState([]);
  const getData = async () =>{
    const res = await fetch('https://fakestoreapi.com/products');
    const products = await res.json();
    setData(products);
    setDataFilter(products);
    setProductStatus(true);
 }

  useEffect(() => {
    getData();
  },[])

  return (
    <Router>
        <Routes>
            <Route path='/' element={<productsContext.Provider value={{data,productStatusLoader,setData,dataFilter,setDataFilter}}><Header/><App/></productsContext.Provider>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/cart' element={<><Header/> <Cart/></>}/>
            <Route path='*' element={<NotFound/>}/>
        </Routes>
    </Router>
  )
}

export const getProducts = () =>{
  return useContext(productsContext);
}
