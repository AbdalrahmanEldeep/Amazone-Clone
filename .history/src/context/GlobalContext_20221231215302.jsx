import { createContext } from "react"


const GlobalState = createContext();


export const GlobalProvider = ({children}) => {
  return (
    <GlobalState.Provider>
        {children}
    </GlobalState.Provider>
  )
}

export const useAuth = () =>{
    return useContext()
} 
