import React, { useState } from 'react'
import CurrencyFormat from 'react-currency-format';
import styled from 'styled-components';
import { UserRate } from './UserRate';

const Container = styled.div`
  height: calc(100vh - 80px);
  width: 100%;
  overflow: auto;
`
const CardBox = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  justify-items: center;
  gap: 30px;
  margin: auto;
  height: 100%;
  padding: 0 70px;
  @media screen and (max-width:676px){
    padding: 0;
  }
`

const PriceBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  padding: 20px;
  width: 400px;
  background-color: #eee;
  right: 0;
  bottom: 0;
  position: fixed;
  z-index: 100;
  transition: bottom .4s ease;
  @media screen and (max-width:676px){
    width: 100%;
  }
  @media screen and (max-width:976px){
    bottom: ${prop => prop.btm};
  }

`
const Price = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-weight: 600;
  border-bottom: 1px solid var(--dark-color);
  & span{
    color: lightseagreen;
    font-size: 1.3rem;
  }
`
const Product = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 100px;
  margin: 30px 0;
  padding: 30px;
  flex-wrap: wrap;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  cursor: pointer;
  &:hover{
     background-color: var(--dark-color);
    *{
     color: var(--white-color) !important;
    }
  }
  @media screen and (max-width:676px){
    width: 80%;
  }
`
const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 50px;
  width: 100%;
`
const Text = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: flex-end;
  *{
    font-weight: 600;
  }
  & p:nth-child(1){
    color: var(--primary-color);
    font-size: 1.1rem;
  }
  & p:nth-child(2){
    font-size: .8rem;
    color: #535353;
  }
`
const ButtonCollection = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 20px 0;
`
const Btn = styled.button`
  padding: 10px 20px;
  background-color: ${(prop) => prop.bg};
  border: none;
  outline: none;
  color: var(--dark-color);
  font-size: 1.2rem;
  border-radius: 3px;
  font-weight: 600;
  color: ${(prop) => prop.clr};
  &:hover{
    cursor: pointer;
    background-color: ${(prop) => prop.clr};
    color: ${(prop) => prop.bg};
  }
`
const ShoppingCard = styled.div`
  position: fixed;
  z-index: 100;
  bottom: 50%;
  transform: translateY(-50%);
  left: -73px;
  rotate: 90deg;
  height: 30px;
  font-weight: bold;
  color: var(--white-color);
  border-radius: 5px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  cursor: pointer;
  padding: 0 30px;
  text-align: center;
  background-color: var(--brown-color);
  display: none;
  font-size: 1.2rem;
  @media screen and (max-width:975px){
    display: block;
  }
`
export const Card = ({total,data}) => {
  const [boxPriceStatus,setBoxPrice] = useState(false);
  return (
    <Container>
      <CardBox>
        {data.map((e) =>(
          <Product key={Math.random() * e.id * 10000}>
            <img src={e.image} width={120} alt="" />
            <Details>
              <Text>
                <p>{e.title}</p>
                <p>{e.description}</p>
              </Text>
              <UserRate data={[e.price,e.rating]}/>
            </Details>
          </Product>
        ))}
      </CardBox>
      <ShoppingCard onClick={() => setBoxPrice(!boxPriceStatus)}>{boxPriceStatus ? "Hide Card" : "Show Card"}</ShoppingCard>
      <PriceBox btm= {boxPriceStatus ? "0" : "-100%"}>
            <Price>
              <h1>Total</h1>
              <CurrencyFormat fixedDecimalScale={true} decimalScale={2}	value={total} thousandSeparator="," isNumericString={true} prefix="$" displayType="text"/>
            </Price>
            {total > 0 ? <ButtonCollection>
              <Btn bg="lightgreen" clr="var(--dark-color)">Checkout now</Btn>
              <Btn bg="var(--dark-color) " clr="lightgreen">Checkout now</Btn>
            </ButtonCollection> : null}
      </PriceBox>
    </Container>
  )
}
