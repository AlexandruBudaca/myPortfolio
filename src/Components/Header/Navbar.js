import React from "react";

const Navbar = ({ setPage }) => {
  return (
    <div id="navbar">
      <ul>
        <li>
          <a onClick={() => setPage(true)}>
            About<span className="Typewriter__cursor">|</span>
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
