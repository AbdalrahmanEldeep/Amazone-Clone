import React, { useEffect } from 'react'
import styled from 'styled-components';
import { useAuth } from '../context/GlobalContext';
import { UserRate } from './UserRate';

const CardBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:space-evenly;
    align-items: center;
    background-color: #fff;
    width: 300px;
    position: relative;
    padding: 30px;
    text-align: center;
    border-radius: 10px;
    gap: 20px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    border: 1px solid var(--dark-color);
    & p{
        font-size: .8rem;
        color: gray;
    }
    & h2{
        color: lightseagreen;
    }
`

const ProductBtn = styled.button`
  border: 0;
  outline: 0;
  background-color:var(--dark-color);
  color: var(--brown-color);
  font-weight: 600;
  padding: 10px 30px;
  font-size: 1.2rem;
  border-radius: 3px;
  width: 100%;
  border: 2px solid var(--dark-color);
  transition: background-color ease .4s;
  z-index: 2;
  &:hover{
    background-color: transparent;
    cursor: pointer;
  }
`
const CardImg = styled.div`
    z-index: 2;
`

export const Product = ({data}) => {
    const [title,id,price,rating,image,description] = data;
    const {dispatch} = useAuth();

    const Appender = () =>{
        dispatch({
            type:"ADD_TO_BASKET",
            item:{
                id,
                title,
                price,
                rating,
                image,
                description
            }
        })
    }
  return (
    <CardBox>
        <CardImg>
            <img src={image} width="100px" alt="" />
            <h5>{title}</h5>
        </CardImg>
        <UserRate data={[price,rating]}/>
       <ProductBtn onClick={Appender}>
            Append
       </ProductBtn>
    </CardBox>
  )
}
