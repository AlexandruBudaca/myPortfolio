import React from "react";

import Terminal from "./Terminal";
import TypeWrite from "./TypeWriter";

// import Links from "./Links";

const Header = () => {
  return (
    <header className="App-header">
      <Terminal />
      <TypeWrite />

      {/* <Links /> */}
    </header>
  );
};
export default Header;
