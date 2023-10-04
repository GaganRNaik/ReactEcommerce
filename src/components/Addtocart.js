import {React,useState} from 'react'
import styled from 'styled-components'
import { FaCheck } from 'react-icons/fa';
import Carttoggle from './Carttoggle';
import { Button } from "../styles/Button";
import {NavLink} from "react-router-dom"
import { useCartcontext } from '../context/cart_context';

const Addtocart = ({product}) => {
    const { id, colors, stock } = product;
    const {addtocart}=useCartcontext()
    const [color, setColor] = useState(colors[0]);
    const[amount,setamount]=useState(1)
    const setIncrease=()=>{stock>amount?setamount(amount+1):setamount(amount)}
    const setDecrease=()=>{amount>0?setamount(amount-1):setamount(amount)}
  return (
    <Wrapper>
      <div className="colors">
        <p>
          Color:
          {colors.map((cur, index) => {
            return (
              <button
                key={index}
                style={{ backgroundColor: cur }}
                className={color === cur ? "btnStyle active" : "btnStyle"}
                onClick={() => setColor(cur)}
              >
                {color === cur ? <FaCheck className="checkStyle" /> : null}
              </button>
            );
          })}{" "}
        </p>
      </div>
      <Carttoggle amt={amount} inc={setIncrease} dec={setDecrease} />
      <NavLink to="/cart">
        <Button onClick={() => addtocart(id, amount, color, product)}>
          Add To Cart
        </Button>
      </NavLink>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  .colors p {
    display: flex;
    justify-content: center;
    align-items: center;
    border:black solid 2px;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }

  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }

  /* we can use it as a global one too  */
  .amount-toggle {
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.4rem;

    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }

    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }`
export default Addtocart