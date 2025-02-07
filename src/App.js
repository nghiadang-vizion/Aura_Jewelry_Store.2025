import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Footer from "./components/Footer";
import PageHeader from "./components/PageHeader";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Shop from "./pages/Shop";

const App = () => {
  return (
    <Router>
      <PageHeader />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Aura_Jewelry_Store.2025" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
};

export default App;
