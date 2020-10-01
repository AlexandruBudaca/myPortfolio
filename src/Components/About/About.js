import React from "react";
import Typewriter from "typewriter-effect";

import "../About/about.css";

const About = () => {
  return (
    <div className="about-content">
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .start()
            .typeString(
              "The journey started with an Ice Felix HC-85 back in my kinder garden. On the road I made some turns and I end up with a Master Degree in drama-acting, I worked in televisions and companies as a video editor or graphic designer. The final destination is here in London where my journey has taken me to Code Your Future where I graduate the bootcamp as junior full stack developer."
            );
        }}
        options={{
          delay: 2,
          cursorClassName: "Typewriter__cursor2",
        }}
      />
    </div>
  );
};

export default About;
