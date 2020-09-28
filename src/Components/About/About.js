import React from "react";
import Terminal from "../Header/Terminal";
import { Row, Col } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import "../About/about.css";

const About = () => {
  return (
    <Row>
      <div className="about" id="about">
        <div className="a">
          <Terminal />
        </div>

        <Col lg="4">
          <div className="about-content">
            <h3>About me</h3>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .start()
                  .typeString(
                    "The journey started with an Ice Felix HC-85 back in my kinder garden. On the road I made some turns and I end up with a Master Degree in drama-acting, I worked in televisions and companies as a video editor or graphic designer. The final destination is here in London where my journey has taken me to Code Your Future where for 8 months I created my junior full stack “character”. In the same time I’m doing my HND in computing at Icon College learning Python, and I’m still enthusiastically into grabbing any other programming languages, frameworks, or principles I can interpret into coding web in my head."
                  );
              }}
              options={{
                delay: 2,
                cursorClassName: "Typewriter__cursor2",
              }}
            />
          </div>
        </Col>
      </div>
    </Row>
  );
};

export default About;
