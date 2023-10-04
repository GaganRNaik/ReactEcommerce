import React from 'react'
import { NavLink } from 'react-router-dom'
import FormatProvider from '../Helper/FormatProvider'
const Product = (curel) => {
    const {id,name,image,price,category}=curel
    
  return (
    <NavLink to={`/SingleProduct/${id}`}>
      <div className="card">
        <figure>
            
          <img src={image} alt={name}/>
        <figcaption className="caption">{category}</figcaption>
          
        </figure>
        <div className="card-data">
          <div className="card-data-flex">
            <h3>{name}</h3>
            <p className="card-data--price">{<FormatProvider price={price}/>}</p>
          </div>
        </div>
      </div>
    </NavLink>
  );
}

export default Product