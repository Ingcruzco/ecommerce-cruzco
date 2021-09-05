import { collection,getDocs,query} from "@firebase/firestore";
import { db } from "../config/firebase/db";
import { productsActions } from "../context/actions/productsActions";

export const getProducts=async(dispatch)=>{
    try{
        const products=[];
        const q= query(collection(db,"products"));
        const querySnapshot= await getDocs(q);
        querySnapshot.docs.forEach(doc => products.push(doc.data()));
        dispatch({type:productsActions.LOAD_PRODUCTS_SUCESS,payload:products});
    }catch(err){
        dispatch({type:productsActions.LOAD_PRODUCTS_ERROR,payload:err.toString()});
    }
}

