import { useEffect, useState } from "react";
import styled from "styled-components";
import { auth } from "../../../firebase";
import { Header } from "../../components/Header";
import { useAuth } from "../../context/GlobalContext";
import banner from "../../assets/imgs/home.jpg"
import { Product } from "../../components/Product";

const Bannner = styled.div`
  min-height: 60vh;
  width: 100vw;
  background-image: url(${banner});
  background-size: contain;
  background-position: center center;
`

function App() {
  const { dispatch, user } = useAuth();
  const [data,setData] = useState([]);


   const getData = async () =>{
     const res = await fetch('https://fakestoreapi.com/products');
     const products = await res.json();
     setData(products);
  }

  useEffect(() => {
    getData();
    console.log(data);
  },[])

  useEffect(() => {
    document.title = "Home | Page";
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <>
      <Header/>
      <Bannner/>
      <Product/>
    </>
  );
}

export default App;
