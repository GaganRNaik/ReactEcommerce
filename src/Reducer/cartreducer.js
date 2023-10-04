const cartreducer=(state,action)=>{
switch (action.type) {
  case "ADD_TO_CART":
    let { id, amount, color, product } = action.payload;
    let existingproduct = state.cart.find((cur) => cur.id === id + color);

    if (existingproduct) {
      let updatedproduct = state.cart.map((cur) => {
        if (cur.id === id + color) {
          let newamount = cur.amount + amount;
          if (newamount >= cur.max) {
            newamount = cur.max;
          }
          return { ...cur, amount: newamount };
        } else {
          return cur;
        }
      });

      return {
        ...state,
        cart: updatedproduct,
      };
    } else {
      let cartProduct;

      cartProduct = {
        id: id + color,
        name: product.name,
        color,
        amount,
        image: product.image[0].url,
        price: product.price,
        max: product.stock,
      };
      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }

  case "REMOVE_CART_ITEM":
    let updatedcart = state.cart.filter((cur) => cur.id !== action.payload);
    return {
      ...state,
      cart: updatedcart,
    };

  case "CLEAR_CART_ITEM":
    return {
      ...state,
      cart: [],
    };

  case "DECREASE_AMOUNT":
    let updatedcaritem = state.cart.map((cur) => {
      if (cur.id === action.payload) {
        let newamt;
        if (cur.amount > 1) {
          newamt = cur.amount - 1;
        } else {
          newamt = 1;
        }

        return { ...cur, amount: newamt };
      } else {
        return { ...cur };
      }
    });
    return { ...state, cart: updatedcaritem };
  case "INCREASE_AMOUNT":
    let updatedinccaritem = state.cart.map((cur) => {
      if (cur.id === action.payload) {
        let newamt;
        if (cur.amount < cur.max) {
          newamt = cur.amount + 1;
        } else {
          newamt = cur.max;
        }

        return { ...cur, amount: newamt };
      } else {
        return { ...cur };
      }
    });
    return { ...state, cart: updatedinccaritem };
  
  case "CART_TOTAL_PRICE_ITEMS":
    let { total_price, total_item } = state.cart.reduce(
      ( acc, cur) => {
        acc.total_item = acc.total_item + cur.amount;
        acc.total_price = acc.total_price + cur.amount * cur.price;
        return acc;
      },
      { total_price :0,
      total_item:0}
    );
    return {
      ...state,
      total_price,
      total_item
    };
  default:
    return state;
}


}

export default cartreducer;
