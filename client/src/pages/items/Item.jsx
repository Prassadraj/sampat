import React, { useContext, useState } from "react";
import { ProductDataContext } from "../../Context/ProductData";
import { Link } from "react-router-dom";
import "./item.css";
import Nav from "../Nav/Nav";

function Item() {
  const { data } = useContext(ProductDataContext);
  const [selectedItems, setSelectedItems] = useState("all");
  const productsToShow =
    selectedItems == "all"
      ? data
      : data.filter((datas) => datas.same == selectedItems);

  return (
    <div>
      <Nav />

      <div className="flex flex-col items-center mt-48">
        {/* <p className="text-3xl font-bold mb-5 uppercase" id="title">
          Products
        </p> */}
        <div className="heading">
          <ul className="flex gap-20 uppercase">
            <li
              className={`cursor-pointer text-2xl  ${
                selectedItems == "all" ? "text-green-700 border-b-2 border-green-700" : " "
              }`}
              onClick={() => setSelectedItems("all")}
            >
              All
            </li>
            <li
              className={`cursor-pointer text-2xl  ${
                selectedItems == "phone" ? "text-green-700 border-b-2 border-green-700" : " "
              }`}
              onClick={() => setSelectedItems("phone")}
            >
              phones
            </li>
            <li
              className={`cursor-pointer text-2xl  ${
                selectedItems == "lap" ? "text-green-700 border-b-2 border-green-700" : " "
              }`}
              onClick={() => setSelectedItems("lap")}
            >
              Laptops
            </li>
            <li
              className={`cursor-pointer text-2xl  ${
                selectedItems == "airpod" ? "text-green-700 border-b-2 border-green-700" : " "
              }`}
              onClick={() => setSelectedItems("airpod")}
            >
              Airpods
            </li>
            <li
              className={`cursor-pointer text-2xl  ${
                selectedItems == "watch" ? "text-green-700 border-b-2 border-green-700" : " "
              }`}
              onClick={() => setSelectedItems("watch")}
            >
              Watchs
            </li>
          </ul>
        </div>
        <div className="flex justify-center p-5 m-10">
          <div className="grid grid-cols-3 gap-5 max-w-screen-lg">
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
                  className="block cursor-pointer"
                />
                <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  <p className=" text-lg font-bold" style={{
                    color:"#08f58e"
                  }}>View Details</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
