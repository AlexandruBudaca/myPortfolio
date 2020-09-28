import React from "react";
import Typewriter from "typewriter-effect";

const Navbar = () => {
  return (
    <div id="navbar">
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .start()
            .typeString(
              `<a href="about">Home</a> <a href="about">About</a> <a>Projects</a>  <a>Contact</a>`
            );
        }}
        options={{
          delay: 30,
          cursorClassName: "Typewriter__cursor2",
          wrapperClassName: "Typewriter__wrapper",
        }}
      />
    </div>
  );
};
export default Navbar;
