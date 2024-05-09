import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Item from "./pages/items/Item";
import Login from "./pages/Login/Login";
import ProductDataProvider from "./Context/ProductData";
import ProductDetail from "./pages/Product/Product";
import Demo from "./demo/Demo";
import Home from "./component/Home/Home";

function App() {
  return (
    <ProductDataProvider>
      <BrowserRouter>
        <div>
          <Routes>
            <Route element={<Item />} path="/item" />
            <Route element={<Home/>} path="/"/>
            <Route element={<Login />} path="/login" />
            <Route element={<ProductDetail />} path="/product/:id" />
          </Routes>
        </div>
      </BrowserRouter>
    </ProductDataProvider>
  );
}

export default App;
