import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Nav from "./components/Nav";
import Home from "./screens/Home";
import CartScreen from "./screens/CartScreen";
import ProductScreen from "./screens/ProductScreen";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route index element={<Home />} />
        <Route path="cart" element={<CartScreen />} />
        <Route path="products/:id" element={<ProductScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
