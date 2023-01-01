import React, { useEffect } from 'react'
import styled from 'styled-components';

const CardBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    width: 300px;
    padding: 30px;
    gap: 30px;
    text-align: center;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    & p{
        font-size: .8rem;
        color: gray;
    }
`

export const Product = ({data}) => {
    const [title,id,price,rating,image,description] = data;
  return (
    <CardBox>
       <img src={image} width="100px" alt="" />
       <h5>{title}</h5>
       <p>{description}</p>
    </CardBox>
  )
}
