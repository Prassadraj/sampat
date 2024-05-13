import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faSquareInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import "./nav.css";
import { Link, useLocation } from "react-router-dom";
import Loading from "../../component/loading/Loading";
import { Cursor } from "../../component/Cursor";

function Nav() {
  const [selectedItem, setSelectedItem] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const [animateOnce, setAnimateOnce] = useState(true);
  const [measure, setMeasure] = useState(0);

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setSelectedItem("Home");
        break;
      case "/about":
        setSelectedItem("About");
        break;
      case "/brands":
        setSelectedItem("Our Brands");
        break;
      case "/item":
        setSelectedItem("Products");
        break;
      case "/career":
        setSelectedItem("Career");
        break;
      case "/success":
        setSelectedItem("Our Success");
        break;
      case "/blog":
        setSelectedItem("Blog");
        break;
      case "/contact":
        setSelectedItem("Contact");
        break;
      default:
        setSelectedItem("");
        break;
    }

    // Show loading indicator for 0.5 seconds whenever location changes
    setIsLoading(true);
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    return () => {
      clearTimeout(loadingTimeout);
    };
  }, [location.pathname]);
  useEffect(() => {
    // Disable further animations after the initial animation
    if (animateOnce) {
      setAnimateOnce(false);
    }
  }, [animateOnce]);
  useEffect(() => {
    const handleScroll = () => {
      setMeasure(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="fixed w-full block z-50 top-4">
      {isLoading && <Loading />}
      <div
        className=" flex justify-between pt-0 pb-3 px-4 sm:px-8 lg:px-10 xl:px-32 animate__animated animate__bounceInDown"
        style={{ background: "#F0EBE3" }}
      >
        <div className="left">
          <ul
            className="text-3xl flex gap-8"
            style={{ color: "#004225" }}
          >
            <li className="hover:-translate-y-1 ease-in-out duration-200">
              <FontAwesomeIcon icon={faFacebook} />
            </li>
            <li className="hover:-translate-y-1 ease-in-out duration-200">
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
        className=" flex justify-around items-center px-4 sm:px-8 lg:px-16 xl:px-32 pt-3 w-full border-b border-gray-300 shadow-md animated-border animate__animated animate__delay-1s"
        style={{ background: "#F6F5F2" }}
      >
        <div>
          <Link to="/">
            <img
              src="https://cpcdiagnostics.in/wp-content/uploads/2022/09/cpc-png-logo-bg-removed.png"
              alt=""
            />
          </Link>
        </div>
        <ul className="flex gap-7 uppercase" id="list">
          <li
            className={`cursor-pointer hover:underline ${
              selectedItem === "Home" ? "selected" : ""
            }`}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className={`cursor-pointer hover:underline ${
              selectedItem === "About" ? "selected" : ""
            }`}
          >
            <Link to="/about">About</Link>
          </li>
          <li
            className={`cursor-pointer hover:underline ${
              selectedItem === "Our Brands" ? "selected" : ""
            }`}
          >
            <Link to="/brands">Our Brands</Link>
          </li>
          <li
            className={`cursor-pointer hover:underline ${
              selectedItem === "Products" ? "selected" : ""
            }`}
          >
            <Link to="/item">Products</Link>
          </li>
          <li
            className={`cursor-pointer hover:underline ${
              selectedItem === "Career" ? "selected" : ""
            }`}
          >
            <Link to="/career">Career</Link>
          </li>
          <li
            className={`cursor-pointer hover:underline ${
              selectedItem === "Our Success" ? "selected" : ""
            }`}
          >
            <Link to="/success">Our Success</Link>
          </li>
          <li
            className={`cursor-pointer hover:underline ${
              selectedItem === "Blog" ? "selected" : ""
            }`}
          >
            <Link to="/blog">Blog</Link>
          </li>
          <li
            className={`cursor-pointer hover:underline ${
              selectedItem === "Contact" ? "selected" : ""
            }`}
          >
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
     
    </div>
  );
}

export default Nav;
