import React from "react";
import Links from "./Links";
import TypeWrite from "./TypeWriter";

const Header = () => {
  return (
    <header className="App-header">
      <h2 className="hi">Hi,</h2>
      <TypeWrite />
      <Links />
    </header>
  );
};
export default Header;
