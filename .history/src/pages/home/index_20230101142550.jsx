import { useEffect, useState } from "react";
import styled from "styled-components";
import { auth } from "../../../firebase";
import { Header } from "../../components/Header";
import { useAuth } from "../../context/GlobalContext";
import banner from "../../assets/imgs/home.jpg"

const Bannner = styled.div`
  max-height: 65vh;
  width: 100vw;
  background-image: url(${banner});
  background-size: cover;
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
      <Header/>
      <Bannner/>
    </>
  );
}

export default App;
