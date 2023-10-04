import { FaTrash } from "react-icons/fa";
import FormatPrice from "../Helper/FormatProvider";
import Carttoggle from "./Carttoggle";
import { useCartcontext } from "../context/cart_context";
const CartItem = ({
  id,
  name,
  image,
  color,
  price,
  amount
}) => {
  const { removecartitem, setDecrease, setIncrease } = useCartcontext();
 
  return (
    <div className="cart_heading grid grid-five-column">
      <div className="cart-image--name">
        <div>
          <figure>
            <img src={image} alt={id} />
          </figure>
        </div>
        <div>
          <p>{name}</p>
          <div className="color-div">
            <p>color:</p>
            <div
              className="color-style"
              style={{ backgroundColor: color, color: color }}
            ></div>
          </div>
        </div>
      </div>
      <div className="cart-hide">
        <p>
          <FormatPrice price={price } />
        </p>
      </div>
      <Carttoggle amt={amount} dec={()=>setDecrease(id)} inc={()=>setIncrease(id)} />
      <div className="cart-hide">
        <p>
          <FormatPrice price={price * amount} />
        </p>
      </div>
      <div>
        <FaTrash className="remove_icon" onClick={() => removecartitem(id)} />
      </div>
    </div>
  );
};

export default CartItem;
