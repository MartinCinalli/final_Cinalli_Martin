import { createContext, useContext, useEffect, useReducer} from "react";
import { reducer } from "../reducers/reducer";
import axios from "axios";

const GlobalState = createContext()

const initialState = {
    listOdon: [],
    detailOdon:[],
    theme: 'light',
    favs: JSON.parse(localStorage.getItem('favs')) || []
}

const context = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState)
    const url = 'https://jsonplaceholder.typicode.com/users'

    
    useEffect(()=>{
        axios(url)
        .then(res => {
            dispatch({type: 'GET_LIST', payload:res.data})
        })
    },[])

    useEffect(() => {
        localStorage.setItem('favs', JSON.stringify(state.favs))
    }, [state.favs])

return (

    <GlobalState.Provider value={{state,dispatch}}>
        {children}
    </GlobalState.Provider>
)
}

export default context

export const useGlobalState = () => useContext(GlobalState)