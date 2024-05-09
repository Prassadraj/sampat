import React, { useContext } from "react";
import { ProductDataContext } from "../../Context/ProductData";
import { Link } from "react-router-dom";
import "./item.css";
import Nav from "../Nav/Nav";

function Item() {
  const { data } = useContext(ProductDataContext);
  const productsToShow = data.slice(0, 5);

  return (
    <div>
      <Nav />
      <div className="flex flex-col items-center mt-5">
        <p className="text-3xl font-bold mb-5 uppercase" id="title">Products</p>
        <div className="flex justify-center gap-5 p-5">
          {productsToShow.map((product) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg hover:translate-y-1"
              style={{ borderColor: "#1A4D2E", borderWidth: "2px" }}
            >
              <img
                src={product.img}
                alt=""
                width="250px"
                className="block h-auto cursor-pointer"
              />
              <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <p className="text-white text-lg font-bold">View Details</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Item;
