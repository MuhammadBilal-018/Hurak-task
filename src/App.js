import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Testimonials from "./components/testimonials/Testimonials";
import Footor from "./components/footer/Footor";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/banner" element={<Banner />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/testimonials" element={<Testimonials />} />
      </Routes>

      <Footor />
    </>
  );
}

export default App;
