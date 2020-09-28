import React, { useState } from "react";
import "./App.css";
import Header from "../src/Components/Header/Header";
import About from "../src/Components/About/About";
import Projects from "../src/Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Header/Navbar";
import "./Components/Header/header.css";

function App() {
  // const [showAbout, setShowAbout] = useState(false);
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      {/* <Projects /> */}
      {/* <Contact />
      <Footer /> */}
    </div>
  );
}

export default App;
