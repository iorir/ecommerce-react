import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Layout from "./components/Layout";
import News from "./Pages/News";
import Profile from "./Pages/Profile";
import Cart from "./Pages/Cart";
import LogReg from "./Pages/LogReg";
import CategoryFilter from "./Pages/CategoryFilter";
import Product from "./Pages/Product";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/News" element={<News />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/LogReg" element={<LogReg />} />
          <Route path="/CategoryFilter" element={<CategoryFilter />} />
          <Route path="/Product" element={<Product />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
