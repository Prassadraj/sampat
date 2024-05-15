import React from "react";
import Nav from "../../pages/Nav/Nav";
import Item from "../../pages/items/Item";
import Contact from "../../pages/contact/Contact";
import { Cursor } from "../Cursor";
import "animate.css";
import "./home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlaskVial } from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <div className="">
      <Nav />

      <div className="flex flex-col justify-center mt-48 items-center gap-5">
        <h1 className="text-3xl">Empowering Labs with Reliable Equipment.</h1>
        <img
          className="w-auto opacity-100 border-b-8 border-r-8 border-r-slate-600 border-b-slate-600 hover:shadow-2xl hover:border-r-gray-600 hover:border-b-gray-600 hover:opacity-95 duration-200"
          style={{ borderRadius: "10px" }}
          src="https://cpcdiagnostics.in/wp-content/uploads/2022/05/banner.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Home;
