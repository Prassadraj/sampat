import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faSquareInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import "./nav.css";
import { Link } from "react-router-dom";
function Nav() {
  const [selectedItem, setSelectedItem] = useState(0); // Default selected item index

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };
  return (
    <div>
      <div
        className="flex justify-between pt-5 pb-3 pr-40 pl-40 "
        style={{ background: "#7ABA78" }}
      >
        <div className="left">
          <ul className="text-2xl flex gap-10  " style={{ color: "#004225" }}>
            <li className="hover:-translate-y-1 ease-in-out duration-200">
              {" "}
              <FontAwesomeIcon icon={faFacebook} />
            </li>
            <li className="hover:-translate-y-1 ease-in-out duration-200">
              {" "}
              <FontAwesomeIcon icon={faEnvelope} />
            </li>
            <li className="hover:-translate-y-1 ease-in-out duration-200">
              <FontAwesomeIcon icon={faSquareInstagram} />
            </li>
            <li className="hover:-translate-y-1 ease-in-out duration-200">
              <FontAwesomeIcon icon={faPhone} />
            </li>
          </ul>
        </div>
        <div className="right">
          <ul className="flex items-center gap-3" style={{ color: "#004225" }}>
            <li>
              <a
                href="https://wa.me/123456789?text=Hello%20there!"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center cursor-pointer"
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="text-3xl mr-2"
                  style={{ color: "#004225" }}
                />
                Chat with Expert
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        class="flex justify-around items-center pl-32 pr-32 pt-3 w-ful border-b border-gray-300 shadow-md "
        // style={{ background: "#FEFDED" }}
      >
        <div>
          <img
            src="https://cpcdiagnostics.in/wp-content/uploads/2022/09/cpc-png-logo-bg-removed.png"
            alt=""
          />
        </div>
        <ul className="flex gap-7" id="list">
          <Link to={"/"}>
            <li
              className={`cursor-pointer ${
                selectedItem === 0 ? "selected" : ""
              }`}
              onClick={() => handleItemClick(0)}
            >
              Home
            </li>
          </Link>
          <li
            className={`cursor-pointer ${selectedItem === 1 ? "selected" : ""}`}
            onClick={() => handleItemClick(1)}
          >
            About
          </li>
          <li
            className={`cursor-pointer ${selectedItem === 2 ? "selected" : ""}`}
            onClick={() => handleItemClick(2)}
          >
            Our Brands
          </li>

          <li
            className={`cursor-pointer ${selectedItem === 3 ? "selected" : ""}`}
            onClick={() => handleItemClick(3)}
          >
            <Link to={"/item"}>Products</Link>
          </li>

          <li
            className={`cursor-pointer ${selectedItem === 4 ? "selected" : ""}`}
            onClick={() => handleItemClick(4)}
          >
            Career
          </li>
          <li
            className={`cursor-pointer ${selectedItem === 5 ? "selected" : ""}`}
            onClick={() => handleItemClick(5)}
          >
            Our Success
          </li>
          <li
            className={`cursor-pointer ${selectedItem === 6 ? "selected" : ""}`}
            onClick={() => handleItemClick(6)}
          >
            Blog
          </li>
          <li
            className={`cursor-pointer ${selectedItem === 7 ? "selected" : ""}`}
            onClick={() => handleItemClick(7)}
          >
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
