import React from 'react'

import { FaMinus, FaPlus } from "react-icons/fa";
const Carttoggle = ({ amt,inc,dec }) => {
  return (
    <>
      <div className="cart-button">
        <div className="amount-toggle">
          <button onClick={dec}>
            <FaMinus />
          </button>
          <div className="amount-style">{amt}</div>
          <button onClick={inc}>
            <FaPlus />
          </button>
        </div>
      </div>
    </>
  );
};

export default Carttoggle