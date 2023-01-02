import { useEffect, useState } from "react";
import styled from "styled-components";
import { auth } from "../../../firebase";
import { Header } from "../../components/Header";
import { useAuth } from "../../context/GlobalContext";
import banner from "../../assets/imgs/home.jpg"
import { Product } from "../../components/Product";

const Bannner = styled.div`
  min-height: 60vh;
  background-image: url(${banner});
  background-size: contain;
  background-position: center center;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3,1fr);
  justify-items: center;
  padding: 50px;
  gap: 70px;
  @media screen and (max-width:976px){
    grid-template-columns: repeat(2,1fr);
  }
  @media screen and (max-width:676px){
    grid-template-columns: repeat(1,1fr);
  }
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
      <Bannner/>
      <Grid>
        {data.map(({title,id,price,rating,image,description}) => {
          return <Product key={id} data={[title,id,price,rating,image,description]}/>
        })}
      </Grid>
    </>
  );
}

export default App;
