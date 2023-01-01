import React, { useEffect } from 'react'
import styled from 'styled-components';
import ThumbUpTwoToneIcon from '@mui/icons-material/ThumbUpTwoTone';
import PeopleOutlineTwoToneIcon from '@mui/icons-material/PeopleOutlineTwoTone';

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
    & p{
        font-size: .8rem;
        color: gray;
    }
    & h2{
        color: lightseagreen;
    }

    &::after{
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: -1;
        background-color:rgb(201, 128, 85);
    }
`
const Details = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    & span,h3{
        display: flex;
        align-items: center;
        color: var(--primary-color);
        gap: 20px;
    }
    & span{
         gap: 10px;
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
  &:hover{
    background-color: transparent;
    cursor: pointer;
  }
`

export const Product = ({data}) => {
    const [title,id,price,rating,image,description] = data;
  return (
    <CardBox>
       <img src={image} width="100px" alt="" />
       <h5>{title}</h5>
       <Details>
         <h2>${price}</h2>
         <h3>
            <span><ThumbUpTwoToneIcon fontSize='small'></ThumbUpTwoToneIcon>{rating.rate}</span>
            <span><PeopleOutlineTwoToneIcon></PeopleOutlineTwoToneIcon>{rating.count}</span>
         </h3>
       </Details>
       <ProductBtn>
            Append
       </ProductBtn>
    </CardBox>
  )
}
