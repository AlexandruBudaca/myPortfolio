import React from "react";
import Links from "./Links";
import TypeWrite from "./TypeWriter";

const Header = () => {
  return (
    <header className="App-header">
      <div className="content">
        <div className="glitch">
          <div className="glitchit"></div>
          <div className="glitchit"></div>
          <div className="glitchit"></div>
          <div className="glitchit"></div>
          <div className="glitchit"></div>
        </div>
      </div>
      <h2 className="hello">Hy,</h2>
      <TypeWrite />
      <Links />
    </header>
  );
};
export default Header;
