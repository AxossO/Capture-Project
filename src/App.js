import React from "react";
import AboutUs from "./pages/AboutUs";
import "../src/styles/App.scss";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import { Route, Routes, useLocation } from "react-router-dom";
import Nav from "./components/NavSection";
import MovieDetail from "./pages/MovieDetail";
// Anima
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Nav />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={<AboutUs />}></Route>
          <Route exact path="/ourwork" element={<OurWork />}></Route>
          <Route path="/ourwork/:id" element={<MovieDetail />}></Route>
          <Route path="/contactus" element={<ContactUs />}></Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}
export default App;
