import React from 'react'
import styled from 'styled-components'
import ThumbUpTwoToneIcon from '@mui/icons-material/ThumbUpTwoTone';
import PeopleOutlineTwoToneIcon from '@mui/icons-material/PeopleOutlineTwoTone';

const Details = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    z-index: 2;
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

export const UserRate = ({data}) => {
    const [price,rating] = data;
  return (
    <Details>
      <h2>${price}</h2>
      <h3>
         <span><ThumbUpTwoToneIcon fontSize='small'></ThumbUpTwoToneIcon>{rating.rate}</span>
         <span><PeopleOutlineTwoToneIcon></PeopleOutlineTwoToneIcon>{rating.count}</span>
      </h3>
  </Details>
  )
}
