import React, { useState } from "react";
import "./App.css";
import TypeWriter from "./Components/Home/TypeWriter";
import About from "../src/Components/About/About";
import Projects from "../src/Components/Projects/Projects";
import { typingTerminal, setPages } from "./utils/utils";
import Links from "./Components/Links";
import Contact from "./Components/Contact/Contact";

import Navbar from "./Components/Navbar";
import "./Components/Home/Home.css";

function App() {
  // const [navbar, setNavbar] = useState(false);
  const [typing, setTyping] = useState(typingTerminal);
  const [page, setPage] = useState(setPages);
  return (
    <div className="App">
      <TypeWriter page={page} setTyping={setTyping} typing={typing} />
      {page.pages[1].state && <About />}
      {page.pages[2].state && <Projects />}
      {page.pages[3].state && <Contact />}
      <Navbar setPage={setPage} page={page} setTyping={setTyping} />
      <Links />
    </div>
  );
}

export default App;
