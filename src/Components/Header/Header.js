import React from "react";

import TypeWrite from "./TypeWriter";

const Header = ({ setNavbar, page, setTyping, typing }) => {
  return (
    <header className="App-header">
      <TypeWrite
        setNavbar={setNavbar}
        page={page}
        setTyping={setTyping}
        typing={typing}
      />
    </header>
  );
};
export default Header;
