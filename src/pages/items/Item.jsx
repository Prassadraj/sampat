import React, { useContext, useState } from "react";
import { ProductDataContext } from "../../Context/ProductData";
import { Link } from "react-router-dom";
import "./item.css";
import { Parallax } from "react-parallax";
import Nav from "../Nav/Nav";
import ItemContent from "../../component/content/ItemContent";

function Item() {
  const { data } = useContext(ProductDataContext);
  const [selectedItems, setSelectedItems] = useState("all");

  // const [click, setClick] = useState(true);

  const productsToShow =
    selectedItems == "all"
      ? data
      : data.filter((datas) => datas.same == selectedItems);

  return (
    <div style={{ scrollBehavior: "smooth" }}>
      <Nav />
      <Parallax
        className="scroll-smooth
        "
        strength={800}
        style={{ width: "100%", objectfit: "contain" }}
        bgImage="https://static7.depositphotos.com/1194063/680/i/450/depositphotos_6809431-stock-photo-laboratory.jpg"
      >
        <div className="flex relative justify-evenly gap-10 items-center mt-36 mb-10">
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
              className="flex flex-col items-center  pt-40 gap-10 uppercase"
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
          hover:shadow-slate-700 ml-20  "
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
      </Parallax>
      <ItemContent />
      <Parallax
        strength={800}
        bgImage="https://i.pinimg.com/originals/a2/f5/3f/a2f53f1377b24b3171814e4e32675835.jpg"
        className="relative scroll-smooth"
        style={{ height: "70vh", width: "100%" }}
      >
        <div
          className=" mt-5 flex flex-col gap-0  items-center shadow-xl shadow-slate-400 rounded-3xl hover:shadow-2xl 
        hover:shadow-slate-700 "
          style={{
            height: "100vh", // Adjusted height to leave space at the bottom
            padding: "0px 0", // Added padding to top and bottom
            overflowY: "auto", // Enable vertical scrolling if needed
          }}
        >
          <div
            className="flex gap-5 shadow-xl shadow-slate-400 rounded-2xl hover:shadow-2xl 
          hover:shadow-slate-700 border-solid border-2 border-gray-300 bg-slate-100"
            style={{
              overflowX: "auto",
              scrollBehavior: "smooth",
              width: "80%", // Set width to 80% for responsiveness
              scrollbarWidth: "thin", // Thin scrollbar (modern browsers)
              WebkitScrollbarWidth: "thin", // Thin scrollbar for older versions of WebKit browsers
              padding: "5px 5px 8px 5px", // Added padding to the sides and bottom of the container
              scrollbarColor: "#48bb98 slategray", // Color for the scrollbar
              scrollbarTrackColor: "slategray", // Color for the scrollbar track
            }}
          >
            {data.map((items) => (
              <div
                className="flex flex-col justify-center items-center gap-5 p-5"
                key={items.id}
                style={{ minWidth: "300px" }}
              >
                <Link
                  to={`/product/${items.id}`}
                  key={items.id}
                  className="flex flex-col items-center gap-4"
                >
                  <img
                    className="cursor-pointer border-solid border-2 border-green-100 rounded-md"
                    src={items.img[0]}
                    width="300px"
                    alt=""
                  />
                  <p>{items.name}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Parallax>
    </div>
  );
}

export default Item;
