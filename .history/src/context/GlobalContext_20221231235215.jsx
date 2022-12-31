import { createContext } from "react"
import {useReducer} from "react";
import { AppReducer, customState } from "./AppReducer";

const GlobalState = createContext();


export const GlobalProvider = ({children}) => {
const [state,dispatch] = useReducer(AppReducer,customState);
 return (
    <GlobalState.Provider>
        {children}
    </GlobalState.Provider>
  )
}


export const useAuth = () =>{
    return useContext(GlobalState);
} 
