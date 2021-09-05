import { productsActions } from "../actions/productsActions";

export const initialState={
    isLoading:false,
    products:[],
    currentProduct:{},
    errorMessage:null,
}

export const productReducer=(state=initialState, action)=>{
    switch (action.type) {
        case productsActions.LOAD_PROUCTS:
            return {
                ...state,
                products:[],
                isLoading:true,
            }
        case productsActions.LOAD_PRODUCTS_SUCESS:
            return {
                ...state,
                products:action.payload,
                isLoading:false,
            }
        case productsActions.LOAD_PRODUCTS_ERROR:
            return {
                ...state,
                errorMessage:action.payload,
                isLoading:false,
            }
        default:
            return state;
    }
}