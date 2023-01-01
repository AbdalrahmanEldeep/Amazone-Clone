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
    text-align: center;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`

export const Product = ({data}) => {
    const [title,id,price,rating,image,description] = data;
  return (
    <CardBox>
       <img src={image} width="100px" alt="" />
       <h4>{title}</h4>
    </CardBox>
  )
}
