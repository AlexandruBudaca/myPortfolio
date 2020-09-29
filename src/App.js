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
  const [navbar, setNavbar] = useState(false);
  const [page, setPage] = useState({
    pages: [
      { id: 0, state: true, text: "" },
      { id: 1, state: false, text: "About" },
    ],
  });
  return (
    <div className="App">
      {navbar && <Navbar setPage={setPage} page={page} />}
      <Header setNavbar={setNavbar} page={page} />
      {page.pages[1].state && <About />}

      <Projects />
      {/* <Contact />
      <Footer /> */}
    </div>
  );
}

export default App;
