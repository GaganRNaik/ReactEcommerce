import React from 'react'
import styled from "styled-components"
import { FaCheck } from "react-icons/fa";
import { useFilterContext } from '../context/Filtercontext'
import FormatPrice from "../Helper/FormatProvider"
import {Button} from "../styles/Button"
const FilterSection = () => {

  const {
    filters: { text, category, color, price, maxprice, minprice },
    updatefiltervalue,
    all_products,
    clearfilter,
  } = useFilterContext();

  const getuniquedata=(data,property)=>{

    let newval=data.map((cur)=>cur[property])
    if (property === "colors") {
      // return (newVal = ["All", ...new Set([].concat(...newVal))]);
      newval = newval.flat();
    }
    return (newval=["all",...new Set(newval)])
  }
  const categoryData = getuniquedata(all_products, "category");
   const companyData = getuniquedata(all_products, "company");
   const colorsData = getuniquedata(all_products, "colors");
  return (
    <Wrapper>
      <div className="filter-search">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            placeholder="Search"
            value={text}
            onChange={updatefiltervalue}
          />
        </form>
      </div>
      <div className="filter-category">
        <h3>Category</h3>
        <div>
          {categoryData.map((cur, index) => (
            <button
              key={index}
              type="button"
              name="category"
              value={cur}
              onClick={updatefiltervalue}
            >
              {cur}
            </button>
          ))}
        </div>
      </div>
      <div className="filter-company">
        <h3>Company</h3>

        <form action="#">
          <select
            name="company"
            id="company"
            className="filter-company--select"
            onClick={updatefiltervalue}
          >
            {companyData.map((curElem, index) => {
              return (
                <option key={index} value={curElem} name="company">
                  {curElem}
                </option>
              );
            })}
          </select>
        </form>
      </div>
      <div className="filter-colors colors">
        <h3>Colors</h3>
        <div className="filter-color-style">
          {colorsData.map((cur, index) => {
            if (cur === "all") {
              return (
                <button
                  key={index}
                  type="button"
                  value={cur}
                  name="color"
                  className="color-all--style"
                  onClick={updatefiltervalue}
                >
                  all
                </button>
              );
            }
            return (
              <button
                key={index}
                type="button"
                value={cur}
                name="color"
                style={{ backgroundColor: cur }}
                onClick={updatefiltervalue}
                className={color === cur ? "btnStyle active" : "btnStyle"}
              >
                {color === cur ? <FaCheck className="checkStyle" /> : null}
              </button>
            );
          })}
        </div>
      </div>
      <div className="filter_price">
        <h3>price</h3>
        <p>
          <FormatPrice price={price} />
        </p>
        <input
          type="range"
          min={minprice}
          max={maxprice}
          onChange={updatefiltervalue}
          name="price"
          value={price}
        />
      </div>
      <div>
        <Button onClick={clearfilter}>Clear Filters</Button>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  h3 {
    padding: 2rem 0;
    font-size: bold;
  }

  .filter-search {
    input {
      padding: 0.6rem 1rem;
      width: 80%;
    }
  }

  .filter-category {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.4rem;

      button {
        border: none;
        background-color: ${({ theme }) => theme.colors.white};
        text-transform: capitalize;
        cursor: pointer;

        &:hover {
          color: ${({ theme }) => theme.colors.btn};
        }
      }

      .active {
        border-bottom: 1px solid #000;
        color: ${({ theme }) => theme.colors.btn};
      }
    }
  }

  .filter-company--select {
    padding: 0.3rem 1.2rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.text};
    text-transform: capitalize;
  }

  .filter-color-style {
    display: flex;
    justify-content: center;
  }

  .color-all--style {
    background-color: transparent;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
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

  .filter_price {
    input {
      margin: 0.5rem 0 1rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
      &:hover {
        background-color: #ec7063;
      }
    }
  }

  .filter-shipping {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .filter-clear .btn {
    background-color: #ec7063;
    color: #000;
  }
`;
export default FilterSection
