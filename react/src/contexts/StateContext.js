import { createContext, useContext} from "react"

export const StateContext = createContext({
    user: null,
    token: null,
    setUser: ()=>{},
    setToken: ()=>{}
})

export const useStateContext = () => useContext(StateContext)