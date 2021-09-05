import { createContext, useEffect, useReducer } from "react";
import { getProducts } from "../../api/productsApi";
import { productsActions } from "../actions/productsActions";
import { productReducer,initialState } from "../reducer/productReducer";

export const TaskContext=createContext(initialState);
export const TaskProvider=({children})=>{

    const [state,dispatch]=useReducer(productReducer,initialState);
    const loadProducts=()=>{
        dispatch({type:productsActions.LOAD_PROUCTS});
        getProducts(dispatch);
    }
    useEffect(()=>{
        loadProducts();
      },[])

    return (
        <TaskContext.Provider value={{...state}}>
            {children}
        </TaskContext.Provider>
    );
}