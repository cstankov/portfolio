import React from "react";
import Navbar from "../components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from '../pages/About'
import Personal from '../pages/Personal'
import Contact from "../pages/Contact";
import School from '../pages/School'

function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<About />} />
        <Route path="/personal" element={<Personal />} />
        <Route path="/school" element={<School />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
