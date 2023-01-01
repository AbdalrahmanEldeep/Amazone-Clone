import { useEffect, useState } from 'react'
import { auth } from '../../../firebase';
import { Header } from '../../components/Header';
import { useAuth } from '../../context/GlobalContext';

function App() {
  const {dispatch} = useAuth();

  useEffect(() =>{
    document.title = "Home | Page";
    auth.onAuthStateChanged((user) => {
      if(user){
        dispatch("SET_USER")
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
