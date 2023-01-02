import React from 'react'
import { Card } from '../../components/Card';
import { ClacTotal } from '../../context/AppReducer';
import { useAuth } from '../../context/GlobalContext';


export const Cart = () => {
  const {basket} = useAuth();
  return (
    <div>
        <Card total={ClacTotal(basket)} data={basket}/>
    </div>
  )
}
