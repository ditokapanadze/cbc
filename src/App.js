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
      <Welocome />
      <Aboutus />
      <Footer />
    </div>
  );
}

export default App;
