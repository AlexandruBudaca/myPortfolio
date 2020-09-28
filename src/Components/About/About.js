import React from "react";
import Terminal from "../Header/Terminal";
import { Row, Col } from "react-bootstrap";

import "../About/about.css";

const About = () => {
  return (
    <Row>
      <div className="about">
        <Terminal />

        <Col lg="4">
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
              back in my kinder garden.<br></br> On the roadI made some turns
              and I end up with a Master Degree in drama-acting,<br></br> I work
              in televisions and companies as a video editor or graphic
              designer. <br></br> The final destination is here in London where
              my journey has taken me to <br></br>
              <a
                href="https://codeyourfuture.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Code Your Future
              </a>{" "}
              where for 8 months I created my junior full stack “character”.{" "}
              <br></br> In the same time I’m doing my HND in computing at Icon
              College learning Python, <br></br> and I’m still enthusiastically
              into grabbing any other programming languages, <br></br>{" "}
              frameworks, or principles I can interpret into coding web in my
              head.
            </p>
          </div>
        </Col>
      </div>
    </Row>
  );
};

export default About;
