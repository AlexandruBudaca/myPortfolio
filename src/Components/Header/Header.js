import React from "react";

import Terminal from "./Terminal";
import TypeWrite from "./TypeWriter";

// import Links from "./Links";

const Header = ({ setNavbar, page }) => {
  return (
    <header className="App-header">
      <Terminal />
      <TypeWrite setNavbar={setNavbar} page={page} />

      {/* <Links /> */}
    </header>
  );
};
export default Header;
