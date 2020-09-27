import React from "react";
import aboutImg from "../../assets/Je_Old.png";

import "../About/about.css";

const About = () => {
  return (
    <section className="container">
      <div className="about">
        <div className="img-div-about">
          <img className="img-about" src={aboutImg} alt="profile" />
        </div>
        <div className="about-content">
          <h1>Who am I?</h1>
          <p>
            The journey started with an{" "}
            <a
              href="https://www.old-computers.com/museum/computer.asp?st=1&c=629"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ice Felix HC-85
            </a>{" "}
            back in my kinder garden. On the road I made some turns and I end up
            with a Master Degree in drama-acting, I did some stops in
            televisions and companies as a video editor or graphic designer. The
            final destination is here in London where I’m a trainee Full Stack
            Developer at{" "}
            <a
              href="https://codeyourfuture.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code Your Future
            </a>{" "}
            . On the way I found that the web development incorporates all my
            passions: creativity, logic, abstract thinking, problem solving and
            I’m allowed to break it to improve the code (in separate Git branch,
            of course). In the same time I’m doing my HND in computing at Icon
            College learning Python, and I’m still enthusiastically into
            grabbing any other programming languages, frameworks, or principles
            I can interpret into coding web in my head. <br />
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
