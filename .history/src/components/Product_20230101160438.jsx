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
    height: 300px;
    padding: 30px;
    text-align: center;
    gap: 20px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    & p{
        font-size: .8rem;
        color: gray;
    }
    & h2{
        color: lightseagreen;
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
  width: 100%;
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
