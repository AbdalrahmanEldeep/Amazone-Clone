import { createContext } from "react"


const GlobalState = createContext();


export const GlobalProvider = ({childern}) => {
  return (
    <GlobalState.Provider>
        {Children}
    </GlobalState.Provider>
  )
}
