// Login.js

import React from "react";
import shade1 from "../../images/shade1.png";
import shade2 from "../../images/shade2.png";
import title from "../../images/title.png";
import "./login.css";

function Login() {
  return (
    <div className="flex  md:h-screen w-full">
      <div className="flex-1 h-screen" id="left">
        <div className="flex justify-center h-full items-center relative">
          <img src={shade1} id="shade1" alt="" />
          <img src={shade2} id="shade2" alt="" />
          <div className="flex flex-col items-center gap-3" id="title">
            <img src={title} width="60%" className="mb-20 md:mb-0" alt="" />
          </div>
        </div>
      </div>
      <div className="flex-1 h-full" id="right">
        <div className="flex justify-center h-full items-center">
          <div className="absolute top-40 right-48 mr-1 md:top-20">
            <div>
              <h1 className="text-4xl sm:text-3xl font-semibold text-green-500">
                Welcome Back
              </h1>
              <p className="text-gray-400 mt-3">
                Enter your email and password to Log In
              </p>
            </div>
            <div className="mt-14">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="text"
                placeholder="Your Email"
                id="email"
                name="email"
                className="w-full border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="mt-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                type="password" /* Corrected to type="password" for password input */
                placeholder="Your Password"
                id="password"
                name="password"
                className="w-96 border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="flex gap-3 mt-7">
              <div>
                <label className="toggle-switch">
                  <input id="btn" type="checkbox" />
                  <span className="slider"></span>
                </label>
              </div>
              <div>
                <label htmlFor="btn" className="text-sm">
                  Remember me
                </label>
              </div>
            </div>
            <button
              className="w-full text-white bg-slate-500 mt-10 rounded-xl"
              id="login"
            >
              LOGIN
            </button>
            <div className="ml-4">
              <p className="text-gray-400 text-sm mt-32 md:mt-11">
                © 2022 Amvion Labs Private Limited. All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
