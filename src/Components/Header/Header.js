import React from "react";

// import Links from "./Links";
import TypeWrite from "./TypeWriter";

const Header = () => {
  return (
    <header className="App-header">
      <div className="home-terminal">
        <TypeWrite />
      </div>
      {/* <Links /> */}
    </header>
  );
};
export default Header;
