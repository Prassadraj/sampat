import React, { useContext, useState } from "react";
import { ProductDataContext } from "../../Context/ProductData";
import { Link } from "react-router-dom";
import "./item.css";
import Nav from "../Nav/Nav";

function Item() {
  const { data } = useContext(ProductDataContext);
  const [selectedItems, setSelectedItems] = useState("all");
  // const [click, setClick] = useState(true);

  const productsToShow =
    selectedItems == "all"
      ? data
      : data.filter((datas) => datas.same == selectedItems);

  return (
    <div>
      <Nav />

      <div className="flex relative justify-around flex-col items-center mt-36">
        {/* <p className="text-3xl font-bold mb-5 uppercase" id="title">
          Products
        </p> */}
        <div
          id="heading"
          className="absolute h-screen w-72 top-0 left-10  p-10 rounded-lg"
          style={{ backgroundColor: "#f6f6f6" }}
        >
          {/* <p onClick={() => setClick(prev=>!prev)}>all</p> */}
          <ul
            // style={{ display: click ? "block" : "none" }}
            className="flex flex-col items-center pt-40 gap-10 uppercase"
          >
            <li
              className={`cursor-pointer text-2xl  ${
                selectedItems == "all"
                  ? "text-green-700 border-b-2 border-green-700"
                  : " "
              }`}
              onClick={() => setSelectedItems("all")}
            >
              All
            </li>
            <li
              className={`cursor-pointer text-2xl  ${
                selectedItems == "phone"
                  ? "text-green-700 border-b-2 border-green-700"
                  : " "
              }`}
              onClick={() => setSelectedItems("phone")}
            >
              phones
            </li>
            <li
              className={`cursor-pointer text-2xl  ${
                selectedItems == "lap"
                  ? "text-green-700 border-b-2 border-green-700"
                  : " "
              }`}
              onClick={() => setSelectedItems("lap")}
            >
              Laptops
            </li>
            <li
              className={`cursor-pointer text-2xl  ${
                selectedItems == "airpod"
                  ? "text-green-700 border-b-2 border-green-700"
                  : " "
              }`}
              onClick={() => setSelectedItems("airpod")}
            >
              Airpods
            </li>
            <li
              className={`cursor-pointer text-2xl  ${
                selectedItems == "watch"
                  ? "text-green-700 border-b-2 border-green-700"
                  : " "
              }`}
              onClick={() => setSelectedItems("watch")}
            >
              Watchs
            </li>
          </ul>
        </div>

        <div
          className="overflow-y-scroll shadow-xl shadow-slate-400 rounded-3xl hover:shadow-2xl 
          hover:shadow-slate-700 "
          style={{
            scrollbarWidth: "none",
            height: "640px",
            borderTop: "none",
          }}
        >
          <div className="flex justify-center  p-5 m-10 ml-56">
            <div className="grid grid-cols-3 gap-5 max-w-screen-lg">
              {productsToShow.map((product) => (
                <Link
                  to={`/product/${product.id}`}
                  key={product.id}
                  className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg hover:translate-y-1"
                  style={{ borderColor: "lightgray", borderWidth: "1px" }}
                >
                  <img
                    src={product.img}
                    alt=""
                    width="250px"
                    className="block cursor-pointer"
                  />
                  <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
                    <p
                      className=" text-lg font-bold"
                      style={{
                        color: "#08f58e",
                      }}
                    >
                      View Details
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
  className="bg-slate-200 mt-10 flex flex-col gap-14 items-center"
  style={{
    height: "calc(100vh - 20px)", // Adjusted height to leave space at the bottom
    padding: "20px 0", // Added padding to top and bottom
    overflowY: "auto", // Enable vertical scrolling if needed
  }}
>
  <div className="flex justify-center">
    <h1 className="mt-8 text-3xl">
      Trending Now: Diagnostics Products Everyone's Talking About
    </h1>
  </div>
  <div
    className="flex gap-5"
    style={{
      overflowX: "auto",
      width: "80%", // Set width to 100% for responsiveness
      scrollbarWidth: "thin", // Thin scrollbar (modern browsers)
      WebkitScrollbarWidth: "thin", // Thin scrollbar for older versions of WebKit browsers
      padding: "0 0 30px 0", // Added padding to the sides of the container
    }}
  >
    {data.map((items) => (
      <div
        className="flex flex-col justify-center items-center gap-5"
        key={items.id}
        style={{ minWidth: "300px" }}
      >
        <img src={items.img[0]} width="300px" alt="" />
        <p>{items.name}</p>
      </div>
    ))}
  </div>
</div>

    </div>
  );
}

export default Item;
