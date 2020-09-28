import React from "react";

import Terminal from "./Terminal";
import TypeWrite from "./TypeWriter";

// import Links from "./Links";

const Header = ({ setNavbar }) => {
  return (
    <header className="App-header">
      <Terminal />
      <TypeWrite setNavbar={setNavbar} />

      {/* <Links /> */}
    </header>
  );
};
export default Header;
