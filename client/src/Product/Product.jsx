import React, { useContext } from "react";
import { ProductDataContext } from "../Context/ProductData";
import { useParams } from "react-router-dom";

function Product() {
  const { data } = useContext(ProductDataContext);
  const { id } = useParams();

  
  const product = data.find((product) => product.id === parseInt(id));

  if (!product) {
    return <div className="text-red-500">Product not found</div>;
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg p-6">
      <h2 className="text-xl font-semibold mb-4">{product.name}</h2>
      <img src={product.img} alt={product.name} className="w-full h-auto mb-4" />
      <p className="text-gray-700">{product.desc}</p>
    </div>
  );
}

export default Product;
