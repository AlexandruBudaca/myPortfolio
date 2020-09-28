import React from "react";
import terminal_img from "../../assets/terminal.png";
import home_img from "../../assets/home-directory.png";

const Terminal = () => {
  return (
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
        <p>--alex--computer--zsh--</p>
      </div>

      <img src={terminal_img} alt="terminal-img" />
    </div>
  );
};

export default Terminal;
