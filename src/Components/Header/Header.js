import React from "react";

import Terminal from "./Terminal";
import TypeWrite from "./TypeWriter";

// import Links from "./Links";

const Header = ({ setNavbar, page, setTyping, typing }) => {
  return (
    <header className="App-header">
      {page.pages[2].state ? null : <Terminal />}
      <TypeWrite
        setNavbar={setNavbar}
        page={page}
        setTyping={setTyping}
        typing={typing}
      />

      {/* <Links /> */}
    </header>
  );
};
export default Header;
