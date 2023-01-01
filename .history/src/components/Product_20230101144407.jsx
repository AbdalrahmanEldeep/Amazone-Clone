import React, { useEffect } from 'react'

export const Product = ({data}) => {
    const [title,id,price,rating,image,description] = data;
  return (
    <div>{title}</div>
  )
}
