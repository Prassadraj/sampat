import React, { createContext } from "react";
import allProducts from "../assets/allProducts";

export const ProductDataContext = createContext();

const ProductDataProvider = (props) => {
  const contextValue = { data: allProducts };
  
  return (
    <ProductDataContext.Provider value={contextValue}>
      {props.children}
    </ProductDataContext.Provider>
  );
};

export default ProductDataProvider;
