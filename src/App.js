import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import Home from "./Home";
import {Routes, Route} from "react-router-dom"
import About from "./About";
import Service from "./Service";
import Contact from "./Contact"
import Navbar  from "./Navbar";
function App() {
  return(
    <>
    <Navbar />
    <Routes>
      <Route path="/"  element={<Home />}/>
      <Route path="/about"  element={<About />}/>
      <Route path="/service"  element={<Service />}/>
      <Route path="/contact"  element={<Contact />}/> 
    </Routes>
     
    </>
  )
}

export default App;
