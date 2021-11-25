import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import Background from "./components/background/Background";
import Aboutus from "./components/aboutus/Aboutus";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Gallery from "./components/gallery/Gallery";
import Welocome from "./components/welcome/Welocome";
import Roadmap from "./components/roadmap/Roadmap";
import Footer from "./components/footer/Footer";
import Tools from "./components/tools/Tools";
import Slider from "./components/slider/Slider";
// import Slider from "./components/slider/Slider";

function App() {
  window.addEventListener("scroll", { behavior: "smooth" });
  return (
    <div className="app">
      <Header />

      <Background />
      {/* <Gallery /> */}
      <Welocome />
      <Roadmap />
      <Aboutus />
      <Tools />
      <Welocome />
      <Aboutus />
      <Slider />
      <Footer />
    </div>
  );
}

export default App;
