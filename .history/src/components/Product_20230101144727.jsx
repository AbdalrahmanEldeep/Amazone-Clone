import React, { useEffect } from 'react'
import styled from 'styled-components';

const CardBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Product = ({data}) => {
    const [title,id,price,rating,image,description] = data;
  return (
    <CardBox>
       <img src={image} width="120px" alt="" />
    </CardBox>
  )
}
