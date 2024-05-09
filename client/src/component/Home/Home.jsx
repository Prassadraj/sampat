import React from "react";
import Nav from "../../pages/Nav/Nav";
import Item from "../../pages/items/Item";

function Home() {
  return (
    <div>
      <Nav />
      {/* <Item/> */}
      <div className="">
        <div className="flex flex-col justify-center mt-8 items-center gap-5">
          <h1 className="text-3xl font-bold">
            Empowering Labs with Reliable Equipment
          </h1>
          <img
            className="opacity-100 border-b-8 border-r-8 border-r-slate-600 border-b-slate-600 hover:shadow-2xl hover:border-r-gray-600 hover:border-b-gray-600 hover:opacity-95 duration-200"
            width="90%"
            style={{ borderRadius: "10px" }}
            src="https://cpcdiagnostics.in/wp-content/uploads/2022/05/banner.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
