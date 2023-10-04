import axios from "axios";
import { useReducer } from "react";
import { createContext,useContext,useEffect } from "react"
import ProductReducer from "../Reducer/Productreducer";

const AppContext=createContext();

const API = "https://api.pujakaitem.com/api/products";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading: false,
  singleProduct: {}
};

const AppProvider=({children})=>{

    const [state,dispatch]=useReducer(ProductReducer,initialState)
    const getProduct=async(url)=>{
        dispatch({ type: "SET_LOADING" });
        try{
            const res=await axios.get(url)
            const products=await res.data;
            dispatch({type:"SET_API_DATA",payload:products})
        }
        catch(error){
            dispatch({ type: "API_ERROR" });
        }
    }

    const getSingleProduct=async (url)=>{
        dispatch({ type: "SET_SINGLE_LOADING" });
        try {
            const res=await axios.get(url);
            const singleproduct=await res.data;
            dispatch({ type: "SET_SINGLE_PRODUCT" ,payload:singleproduct});
        } catch (error) {
            dispatch({ type: "SET_SINGLE_ERROR" });
        }
    }

useEffect(()=>{
    getProduct(API);
},[])

return(<AppContext.Provider value={{ ...state,getSingleProduct}}>{children}</AppContext.Provider>)
}
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };