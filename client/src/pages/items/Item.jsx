import React, { useContext } from "react";
import { ProductDataContext } from "../../Context/ProductData";
import { Link } from "react-router-dom";

function Item() {
  const { data } = useContext(ProductDataContext);

  return (
    <div className="flex justify-center items-center h-screen gap-5 bg-gray-200 p-5">
      {data.map((product) => (
        <Link to={`/product/${product.id}`} key={product.id} className="hover:opacity-75 transition-opacity duration-300 ease-in-out">
          <img
            src={product.img}
            alt=""
            width="100"
            className="cursor-pointer rounded-lg shadow-md hover:shadow-lg"
          />
        </Link>
      ))}
    </div>
  );
}

export default Item;
