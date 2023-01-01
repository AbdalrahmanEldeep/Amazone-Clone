import { useEffect, useState } from 'react'
import { Header } from '../../components/Header';

function App() {

  useEffect(() =>{
    document.title = "Home | Page";
  },[])
  return (
    <>
      <Header/>
      <h1>Hallo Wolrd</h1>
    </>
  )
}

export default App
