import React from "react";
import "./App.css";
import Header from "../src/Components/Header/Header";
import About from "../src/Components/About/About";
import Projects from "../src/Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

import "./Components/Header/header.css";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      {/* <Contact />
      <Footer /> */}
    </div>
  );
}

export default App;
