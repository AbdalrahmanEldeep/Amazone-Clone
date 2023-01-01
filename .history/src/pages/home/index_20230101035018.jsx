import { useEffect, useState } from 'react'
import { auth } from '../../../firebase';
import { Header } from '../../components/Header';

function App() {
  

  
  useEffect(() =>{
    document.title = "Home | Page";
    auth.onAuthStateChanged((user) => {
      if(user){
        console.log(user);
      }
    })
  },[])
  return (
    <>
      <Header/>
      <h1>Hallo Wolrd</h1>
    </>
  )
}

export default App
