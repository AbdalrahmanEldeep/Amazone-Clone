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
    & *{
        display: flex;
        align-items: center;
        gap: 4px;
        color: var(--primary-color);
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
            <ThumbUpTwoToneIcon fontSize='small'></ThumbUpTwoToneIcon><span>{rating.rate}</span>
            <PeopleOutlineTwoToneIcon></PeopleOutlineTwoToneIcon><span>{rating.count}</span>
         </h3>
       </Details>
    </CardBox>
  )
}
