import reducer from "../Reducer/cartreducer";

import {createContext,useEffect,useContext, useReducer } from "react"

const CartContext = createContext();
const localcartdata=JSON.parse(localStorage.getItem("cart"))
const initialstate = {
  cart: localcartdata,
  total_item: "",
  total_price: "",
  shipping_fee: 50000,
};

const Cartprovider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialstate);
  useEffect(()=>{
    dispatch({ type: "CART_TOTAL_PRICE_ITEMS" });
    localStorage.setItem("cart",JSON.stringify(state.cart))
  },[state.cart])
  const addtocart = (id, amount, color, product ) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { id, amount, color, product }
    });
  };
  const setDecrease=(id)=>{
    dispatch({type:"DECREASE_AMOUNT",payload:id})
  }
  const setIncrease = (id) => {
    dispatch({ type: "INCREASE_AMOUNT",payload:id });
  };
  const clearCart=()=>{
    dispatch({ type: "CLEAR_CART_ITEM"});
  }

  const removecartitem=(id)=>{
    dispatch({type:"REMOVE_CART_ITEM",payload:id})
  }
  return (
    <CartContext.Provider
      value={{ ...state, addtocart, removecartitem, clearCart,setDecrease,setIncrease }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartcontext = () => {
  return useContext(CartContext);
};

export { Cartprovider, useCartcontext };
