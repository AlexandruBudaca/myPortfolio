import React, { useState } from "react";
import "./App.css";
import Header from "../src/Components/Header/Header";
import About from "../src/Components/About/About";
import Projects from "../src/Components/Projects/Projects";
import { typingTerminal } from "./utils/utils";
import Links from "../src/Components/Header/Links";
// import Contact from "./Components/Contact/Contact";

import Navbar from "./Components/Header/Navbar";
import "./Components/Header/header.css";

function App() {
  const [navbar, setNavbar] = useState(false);
  const [typing, setTyping] = useState(typingTerminal);

  const [page, setPage] = useState({
    pages: [
      { id: 0, state: true, text: "Home" },
      { id: 1, state: false, text: "About" },
      { id: 2, state: false, text: "Projects" },
    ],
  });
  return (
    <div className="App">
      {navbar && <Navbar setPage={setPage} page={page} setTyping={setTyping} />}
      <Header
        setNavbar={setNavbar}
        page={page}
        setTyping={setTyping}
        typing={typing}
      />
      {page.pages[1].state && <About />}
      {page.pages[2].state && <Projects />}

      {/* <Contact /> */}
      <Links />
    </div>
  );
}

export default App;
