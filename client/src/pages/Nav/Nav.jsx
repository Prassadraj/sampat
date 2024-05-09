import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faSquareInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

function Nav() {
  return (
    <div>
      <div
        className="flex justify-between pt-5 pb-3 pr-40 pl-40 "
        style={{ background: "#74E291" }}
      >
        <div className="left">
          <ul className="text-2xl flex gap-10  " style={{ color: "#1A4D2E" }}>
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
          <ul className="flex items-center gap-3" style={{ color: "#1A4D2E" }}>
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
                  style={{ color: "#1A4D2E" }}
                />
                Chat with Expert
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nav;
