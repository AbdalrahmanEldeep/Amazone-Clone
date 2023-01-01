import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Amazone from "../../assets/imgs/amazone.png";
import {createUserWithEmailAndPassword} from "firebase/auth"
import {auth} from "../../../firebase";
import { useAuth } from '../../context/GlobalContext';


const LoginBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height:100vh;
  width: 100%;
  flex-direction: column;
  gap: 30px;
  `
const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding:30px 20px;
  justify-content: flex-start;
  align-items: flex-start;
  @media screen and (max-width:976px) {
    width: 80%;
    margin: 0 auto;
  }
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  & h1{
    margin-bottom: 30px;
    font-size:2.3rem;
  }
`
const FormInp = styled.input`
  width: 100%;
  padding: 10px 20px;
  border: 1px solid var(--dark-color);
  font-size: 1.1rem;
  outline: none;
  margin: 5px 0;
  border-radius: 3px;
`
const FormBtn = styled.button`
  width: 100%;
  border: 0;
  outline: 0;
  padding: 10px 30px;
  background-color: var(--brown-color);
  color: var(--white-color);
  cursor: pointer;
  margin: 10px 0;
  border-radius: 3px;
  border: 1px solid var(--brown-color);
  transition: background-color .3s ease;
  font-weight: 600;
  &:hover{
    background-color: transparent;
    color: var(--brown-color);
  }
`
const FormP = styled.p`
  font-size: .8rem;
  color: var(--priamry-color);
  font-weight: 500;
  text-align: center;
  padding: 20px;
  display: flex;
  width: 100%;
  justify-content: center;
`
export default function Login() {
  const {user} = useAuth();
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate()
  const register = (e) =>{
     e.preventDefault();
     createUserWithEmailAndPassword(auth,email,password).then((auth) => navigate("/"));
  }

  useEffect(() =>{
    document.title = "Login | Page";
  })
  return (
    <LoginBox>
      <Link to="/"><img src={Amazone} alt="" width={150}/></Link>
      <Form>
        <h1>Sign in</h1>
        <label htmlFor="email">Email</label>
        <FormInp type="email" required id='email' onChange={({target}) => setEmail(target.value)}/>
        <label htmlFor="password">Password</label>
        <FormInp type="password" required id='password'  onChange={({target}) => setPassword(target.value)}/>
        <FormBtn type='submit'>Sign in</FormBtn>
        <FormBtn onClick={register}>Create Your Amazone Account</FormBtn>
        <FormP>By Continuing you,agree with terms in amazone fake clone and you will be <br/> register at them</FormP>
      </Form>
    </LoginBox>
  )
}
