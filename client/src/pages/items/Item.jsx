// Item.jsx
import React, { useContext } from "react";
import { ProductDataContext } from "../../Context/ProductData";

function Item() {
  const { data } = useContext(ProductDataContext);
  console.log(data);
  return (
    <div className="">
      {data.map((product) => (
        <h2 key={product.id}>{product.id}</h2>
      ))}
    </div>
  );
}

export default Item;
