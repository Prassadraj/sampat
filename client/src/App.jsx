// App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Item from "./pages/items/Item";
import Login from "./pages/Login/Login";
import ProductDataProvider from "./Context/ProductData";

function App() {
  return (
    <ProductDataProvider>
      <div>
        {/* <Login/> */}
        <BrowserRouter>
          <Routes>
            <Route element={<Item />} path="/" />
            <Route element={<Login />} path="/login" />
          </Routes>
        </BrowserRouter>
      </div>
    </ProductDataProvider>
  );
}

export default App;
