import { createContext } from "react"


const GlobalState = createContext();


export const GlobalProvider = ({children}) => {
const [state,dispatch] = useReducer();
 return (
    <GlobalState.Provider>
        {children}
    </GlobalState.Provider>
  )
}


export const useAuth = () =>{
    return useContext(GlobalState);
} 
