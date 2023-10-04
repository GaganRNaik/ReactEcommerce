import { createContext, useEffect, useReducer,useContext } from "react";
import {useProductContext} from "./Productcontext"
import reducer from "../Reducer/FilterReducer";
const Filtercontext=createContext()

export const FilterContextProvider=({children})=>{
    const {products}=useProductContext()
    const initialState = {
      filter_products: [],
      all_products: [],
      grid_view:true,
      sorting_value:"lowest",
      filters:{
        text:"",
        category:"all",
        company:"all",
        color:"all",
        price:0,
        maxprice:0,
        minprice:0

      }
    };
     const [state, dispatch] = useReducer(reducer, initialState);

    const setGridView=()=>{
        return dispatch({ type: "SET_GRID_VIEW" });
    }

    
    const updatefiltervalue=(event)=>{
      let name=event.target.name
      let value=event.target.value
      dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } });
    }
     const setListView = () => {
       return dispatch({ type: "SET_LIST_VIEW" });
     };
     const clearfilter=()=>{
      return dispatch({ type: "CLEAR_FILTER" });
     }
     const sorting=(event)=>{
      let uservalue=event.target.value;
      dispatch({ type: "GET_SORT_VALUE", payload: uservalue });
     }
     useEffect(() => {
      dispatch({ type: "FILTER_PRODUCTS" });
       dispatch({ type: "SORTING_PRODUCTS" });
     }, [state.sorting_value, state.filters]);

    useEffect(()=>{
        dispatch({ type: "LOAD_FILTER_PRODUCTS",payload:products });
    },[products])

    return (
      <Filtercontext.Provider
        value={{
          ...state,
          setGridView,
          setListView,
          sorting,
          updatefiltervalue,
          clearfilter
        }}
      >
        {children}
      </Filtercontext.Provider>
    );
    
}

export const useFilterContext=()=>{
    return useContext(Filtercontext)
}