import { useEffect, useState } from "react";
import styled from "styled-components";
import { auth } from "../../../firebase";
import { Header } from "../../components/Header";
import { useAuth } from "../../context/GlobalContext";
import banner from "../../assets/imgs/home.jpg"
import { Product } from "../../components/Product";
import { MagnifyingGlass } from "react-loader-spinner";

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
const Spanner = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
`

function App() {
  const { dispatch, user } = useAuth();
  const [data,setData] = useState([]);
  const [productStatusLoader,setProductStatus] = useState(false);


   const getData = async () =>{
     const res = await fetch('https://fakestoreapi.com/products');
     const products = await res.json();
     setData(products);
     setProductStatus(true);
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
       {productStatusLoader ? 
          <Grid>
            {data.map(({title,id,price,rating,image,description}) => {
              return <Product key={id} data={[title,id,price,rating,image,description]}/>
            })}
          </Grid> : 
          <Spanner>
            <MagnifyingGlass
                visible={true}
                height="80"
                width="80"
                ariaLabel="MagnifyingGlass-loading"
                wrapperStyle={{}}
                wrapperClass="MagnifyingGlass-wrapper"
                glassColor = '#c0efff'
                color = 'rgb(2, 27, 34)'
              />
          </Spanner>
      }
    </>
  );
}

export default App;
