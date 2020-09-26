import React from "react";
import terminal_img from "../../assets/terminal.png";
import home_img from "../../assets/home-directory.png";
// import Links from "./Links";
import TypeWrite from "./TypeWriter";

const Header = () => {
  return (
    <header className="App-header">
      <div className="home-terminal">
        <div className="bubbles">
          <div className="bubble1"></div>
          <div className="bubble2"></div>
          <div className="bubble3"></div>
        </div>
        <div className="terminal-head">
          <img
            src={home_img}
            style={{ width: "25px", height: "25px" }}
            alt="home-logo"
          />
          <p>--alexcomputer --zsh--</p>
        </div>

        <img src={terminal_img} alt="terminal-img" />
        <TypeWrite />
      </div>
      {/* <Links /> */}
    </header>
  );
};
export default Header;
