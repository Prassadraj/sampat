import Login from "./pages/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Item from "./pages/items/Item";

function App() {
  return (
    <div>
      {/* <Login/> */}
      <BrowserRouter>
        <Routes>
          <Route element={<Item />} path="/item" />
          <Route element={<Login/>} path="/login"/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
