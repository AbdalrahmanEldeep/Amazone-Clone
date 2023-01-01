import { useEffect, useState } from "react";
import styled from "styled-components";
import { auth } from "../../../firebase";
import { Header } from "../../components/Header";
import { useAuth } from "../../context/GlobalContext";
import banner from "../../assets/imgs/home.jpg"

const Bannner = styled.div`
  max-height: 75vh;
  width: 100vw;
`

function App() {
  const { dispatch, user } = useAuth();

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
      <Header />
      <Bannner>
        <img src={banner} width="100%" height="100%" alt="" />
      </Bannner>
    </>
  );
}

export default App;
