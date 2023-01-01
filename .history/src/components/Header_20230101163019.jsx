import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from "../assets/imgs/logo.png"
import SearchIcon from '@mui/icons-material/Search';
import LocalGroceryStoreTwoToneIcon from '@mui/icons-material/LocalGroceryStoreTwoTone';
import SortTwoToneIcon from '@mui/icons-material/SortTwoTone';
import { useAuth } from '../context/GlobalContext';
import { auth } from '../../firebase';

const Flex = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  align-items: ${prop => prop.align};
  justify-content: ${prop => prop.just};
  flex-direction: ${prop => prop.dir};
  gap: ${prop => prop.gp};
`

const fixedScroller = {
  position: "fixed",
  width: "100%",
  top: "0",
}

const Head = styled.header`
  padding: 0 5px;
  max-height: 80px;
  background-color: var(--dark-color);
`
const Logo = styled.div`
  justify-content: center;
  height: 80px;
  overflow: hidden;
`
const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`
const SearchIconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 3px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  cursor: pointer;
  transition: scale ease .4s;
  &:hover{
    transform: scale(1.1,1.1);
  }
  color: var(--white-color);
  background-color: var(--brown-color);
`

const Inp = styled.input`
 height: 40px;
 padding: 10px 30px;
 border-radius: 3px;
 width: 100%;
 border: none;
 outline: none;
 border-top-right-radius: 0;
 border-bottom-right-radius: 0;
 font-size: 1.3rem;
`
const LinksBox = styled.div`
   min-width: 500px;
   transition: bottom ease .4s;
   padding: 0 30px;
   @media screen and (max-width:976px){
     position: fixed;
     bottom:0px;
     bottom: ${prop => prop.bottom};
     right: 0;
     padding: 10px;
     background-color: var(--primary-color);
     border-radius: 5px;
     border-top-right-radius: 0;
     border-top-left-radius: 0;
     border-bottom-right-radius: 0;
  }
`
const LinkEle = styled.div`
`

const ToggleIcon = styled.div`
  cursor: pointer;
  margin-left: 10px;
  color: var(--white-color);
  display: none;
  @media screen and (max-width:976px){
    display: block;
  }

`

export const Header = () => {
  const [toggler,setToggler] = useState(true);
  const {user,basket} = useAuth();

  function HandelOut(){
    auth.signOut();
  }
  return (
    <Head>
      <Flex just="space-between">
        {/* ==== LOGO ========= */}
        <Link to="/">
            <Logo>
              <Flex just="center">
                <img src={logo} alt="" width="120px" />
              </Flex>
            </Logo>
        </Link>
      {/* === SEARCH-BOX ============== */}
        <Search>
          <Inp type="search"/>
          <SearchIconBox>
              <SearchIcon/>
          </SearchIconBox>
        </Search>
        {/* ====== NAV-LINKS-BOX-ELEMNTS =========== */}
        <LinksBox bottom={toggler ? "-100%" : "0px"}>
          <Flex just= {toggler ? "center" : "flex-end"}>
             <LinkEle>
               <Flex gp= {toggler ? "50px"  : "30px"}>
                    <Flex style={{color:"#fff",cursor:"pointer"}} dir='column' align="flex-start" just="center" onClick={HandelOut}>
                        <p>Hallo {user ? user.email : "Guest"}</p>
                      <Link to={user ? "/" : "/login"}>
                        <h3>{user ? "Sign Out" : "Sign In"}</h3>
                      </Link>
                    </Flex>  
                  <Link to="/orders">
                    <Flex dir='column' align="flex-start" just="center">
                      <p>Returm</p>
                      <h3>Orders</h3>
                    </Flex>  
                  </Link> 
                  <Link to="/prime">
                    <Flex dir='column' align="flex-start" just="center">
                      <p>Your</p>
                      <h3>Prime</h3>
                    </Flex>  
                  </Link> 
                  <Link to="/cart">
                    <Flex just="center" gp="5px">
                      <LocalGroceryStoreTwoToneIcon fontSize='large'/>
                      <h3>{basket.length}</h3>
                    </Flex>  
                  </Link> 
               </Flex>
            </LinkEle>
          </Flex>
        </LinksBox>
        {/* === NAV-TOGGLE-SM ========  */}
        <ToggleIcon onClick={() => setToggler(!toggler)}>
          <Flex just="center" gp="5px">
              <SortTwoToneIcon fontSize='large'/>
          </Flex>  
        </ToggleIcon>
      </Flex>
    </Head>
  )
}
