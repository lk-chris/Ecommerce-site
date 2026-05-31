import { Routes, Route } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import HomePage from "./pages/home/HomePage.jsx";
import { CheckoutPage } from "./pages/checkout/CheckoutPage.jsx";
import { OrdersPage } from "./pages/OrdersPage.jsx";
import { TrackingPage } from "./pages/TrackingPage.jsx";
import { PageNotFound } from "./pages/404Page.jsx";

function App() {
  const [cart, setCart] = useState([]);

  const loadCart = async () => {
    try {
      const response = await axios.get("/api/cart-items?expand=product");
      setCart(response.data);
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };

  useEffect(() => {
    loadCart();
  }, []);

  return (
    <Routes>
      <Route index element={<HomePage cart={cart} loadCart={loadCart}/>} />
      <Route path="checkout" element={<CheckoutPage cart={cart} loadCart={loadCart}/>} />
      <Route path="orders" element={<OrdersPage cart={cart} />} />
      <Route path="tracking" element={<TrackingPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
