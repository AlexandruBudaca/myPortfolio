import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import TypeWriter from "./Components/Home/TypeWriter";
import About from "../src/Components/About/About";
import Projects from "../src/Components/Projects/Projects";
import { typingTerminal, setPages } from "./utils/utils";
import Links from "./Components/Links";
import Contact from "./Components/Contact/Contact";
import { TweenMax } from "gsap";

import Navbar from "./Components/Navbar";
import "./Components/Home/Home.css";

function App() {
  const [typing, setTyping] = useState(typingTerminal);
  const [page, setPage] = useState(setPages);
  const [homeTyping, setHomeTyping] = useState(false);
  const intro = useRef(null);
  const introText = useRef(null);
  const hide = useRef(null);
  const text = useRef(null);
  const slider = useRef(null);
  useEffect(() => {
    TweenMax.fromTo(text.current, 1.5, { y: 100 }, { y: 0 });
    TweenMax.fromTo(slider.current, 1.5, { y: `100%` }, { y: `-100%` }).delay(
      1.5
    );
    TweenMax.fromTo(intro.current, 1, { y: `0%` }, { y: `-100%` }).delay(2);
    setTimeout(() => {
      setHomeTyping(true);
    }, 2500);
  }, []);

  return (
    <div className="App">
      <div className="intro" ref={intro}>
        <div className="intro-text" ref={introText}>
          <h1 className="hide" ref={hide}>
            <span className="text" ref={text}>
              Hello World!
            </span>
          </h1>
        </div>
      </div>
      <div
        className="slider"
        ref={slider}
        style={{ transform: `translateY(100%)` }}
      ></div>
      {homeTyping && (
        <TypeWriter page={page} setTyping={setTyping} typing={typing} />
      )}
      {page.pages[1].state && <About />}
      {page.pages[2].state && <Projects />}
      {page.pages[3].state && <Contact />}
      <Navbar setPage={setPage} page={page} setTyping={setTyping} />
      <Links />
    </div>
  );
}

export default App;
