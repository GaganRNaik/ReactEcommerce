

const FilterReducer = (state,action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      let pricearr = action.payload.map((cur) => cur.price);
      let maxp = Math.max(...pricearr);
      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
        filters: {
          ...state.filters,
          price: maxp,
          maxprice: maxp,
        },
      };

    case "SET_GRID_VIEW":
      return {
        ...state,
        grid_view: true,
      };
    case "SET_LIST_VIEW":
      return {
        ...state,
        grid_view: false,
      };
    case "GET_SORT_VALUE":
      return {
        ...state,
        sorting_value: action.payload,
      };

    case "UPDATE_FILTERS_VALUE":
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };
    case "FILTER_PRODUCTS":
      const { text, category, company, color, price } = state.filters;
      let newfiltered = [...state.all_products];

      if (text) {
        newfiltered = newfiltered.filter((curel) => {
          return curel.name.toLowerCase().includes(text);
        });
      }

      if (category !== "all") {
        newfiltered = newfiltered.filter(
          (curel) => curel.category === category
        );
      }

      if (company !== "all") {
        newfiltered = newfiltered.filter(
          (curElem) => curElem.company === company
        );
      }

      if (color !== "all") {
        newfiltered = newfiltered.filter((cur) => cur.colors.includes(color));
      }

      if (price) {
        newfiltered = newfiltered.filter((cur) => cur.price <= price);
      }

      return {
        ...state,
        filter_products: newfiltered,
      };

    case "SORTING_PRODUCTS":
      let newsortdata;
      const { filter_products, sorting_value } = state;
      let tempSortProduct = [...filter_products];

      const sortingProducts = (a, b) => {
        if (sorting_value === "lowest") {
          return a.price - b.price;
        }

        if (sorting_value === "highest") {
          return b.price - a.price;
        }

        if (sorting_value === "a-z") {
          return a.name.localeCompare(b.name);
        }

        if (sorting_value === "z-a") {
          return b.name.localeCompare(a.name);
        }
      };
      newsortdata = tempSortProduct.sort(sortingProducts);

      return {
        ...state,
        filter_products: newsortdata,
      };
    case "CLEAR_FILTER":
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          category: "all",
          company: "all",
          color: "all",
          price: state.filters.maxprice,
          maxprice: state.filters.maxprice,
          minprice: 0,
        },
      };
    default:
      return state;
  }
}

export default FilterReducer