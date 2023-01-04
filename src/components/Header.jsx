import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from "../assets/imgs/logo.png"
import SearchIcon from '@mui/icons-material/Search';
import LocalGroceryStoreTwoToneIcon from '@mui/icons-material/LocalGroceryStoreTwoTone';
import SortTwoToneIcon from '@mui/icons-material/SortTwoTone';
import { useAuth } from '../context/GlobalContext';
import { auth } from '../../firebase';
import { getProducts } from '../router/routes';

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
  animation:"scroller ease .4s"
}

const Head = styled.header`
  padding: 0 5px;
  max-height: 80px;
  background-color: var(--dark-color);
  z-index: 100;
  position: relative;
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
   transition: bottom ease .4s;
   padding: 0 30px;
   @media screen and (max-width:976px){
     position: fixed;
     top:0px;
     top: ${prop => prop.bottom};
     right: 0;
     padding: 10px;
     width: 100%;
     background-color: var(--primary-color);
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
const SoppingBagCard = styled.div`
  position: fixed;
  bottom: 20px;
  left: 20px;
  z-index: 10000;
  & *{
    color: #000;
  }
`

export const Header = () => {
  const [toggler,setToggler] = useState(true);
  const {user,basket} = useAuth();
  const [scrollStatus,setScroll] = useState(false);
  const {data,setData,dataFilter,setDataFilter} = getProducts();

  function HandelOut(){
    auth.signOut();
  }
  function dataSearch({target}){
    if(target.value.length > 0){
       setData(data.filter((e) => e.title.toLowerCase().startsWith(target.value)))
    }else{
      setData(dataFilter);
    }
  }

  useEffect(() =>{
    window.addEventListener("scroll",() =>{
      window.scrollY > 30 ? setScroll(true) : setScroll(false);
    })
  },[])

  return (
    <Head style={scrollStatus ? fixedScroller : {}}>
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
          <Inp type="search" onInput={dataSearch}/>
          <SearchIconBox>
              <SearchIcon/>
          </SearchIconBox>
        </Search>
        {/* ====== NAV-LINKS-BOX-ELEMNTS =========== */}
        <LinksBox bottom={toggler ? "-100%" : "80px"}>
             <LinkEle>
               <Flex gp= {toggler ? "50px"  : "30px"} style={{flexWrap:"warp"}}>
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
               </Flex>
            </LinkEle>
        </LinksBox>
        {/* === NAV-TOGGLE-SM ========  */}
        <ToggleIcon onClick={() => setToggler(!toggler)}>
          <Flex just="center" gp="5px">
              <SortTwoToneIcon fontSize='large'/>
          </Flex>  
        </ToggleIcon>
      </Flex>
      <SoppingBagCard>
        <Link to="/cart">
          <Flex just="center" gp="5px">
            <LocalGroceryStoreTwoToneIcon fontSize='large'/>
            <h3>{basket?.length}</h3>
          </Flex>  
        </Link> 
      </SoppingBagCard>
    </Head>
  )
}
