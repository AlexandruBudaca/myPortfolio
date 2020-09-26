import React, { useState } from "react";
import moment from "moment";
import { Row } from "react-bootstrap";
import Typewriter from "typewriter-effect";

import "./header.css";

const TypeWrite = () => {
  var date = moment().format("LLLL");
  const [showTyping, setShowTyping] = useState({
    myName: false,
    cd_mySkills: false,
    mySkills: false,
    frontend: false,
  });

  return (
    <Row>
      <div lg={12} className="type-write">
        <p>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .start()
                .typeString(` Last login: ${date}`)
                .callFunction(() => {
                  setShowTyping((prevState) => ({
                    ...prevState,
                    myName: true,
                  }));
                });
            }}
            options={{
              delay: 50,
              wrapperClassName: "Typewriter__wrapper",
            }}
          />
        </p>

        {showTyping.myName && (
          <p className="terminal-name">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .start()
                  .typeString(
                    "Hi, I'm Alexandru Budaca!, I'm a full stack developer!"
                  )
                  .callFunction(() => {
                    setShowTyping((prevState) => ({
                      ...prevState,
                      cd_mySkills: true,
                    }));
                  });
              }}
              options={{
                delay: 50,
                cursorClassName: "Typewriter__cursor",
                wrapperClassName: "Typewriter__wrapper",
              }}
            />
          </p>
        )}

        {showTyping.cd_mySkills && (
          <p>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .start()
                  .typeString("cd mySkills")
                  .callFunction(() => {
                    setShowTyping((prevState) => ({
                      ...prevState,
                      mySkills: true,
                    }));
                  });
              }}
              options={{
                delay: 50,
                cursorClassName: "Typewriter__cursor",
                wrapperClassName: "Typewriter__wrapper",
              }}
            />
          </p>
        )}

        {showTyping.mySkills && (
          <p>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .start()
                  .pasteString("<span>mySkills</span>")
                  .typeString(" npx create-react-app frontend")
                  .callFunction(() => {
                    setShowTyping((prevState) => ({
                      ...prevState,
                      frontend: true,
                    }));
                  });
              }}
              options={{
                delay: 50,
                cursorClassName: "Typewriter__cursor",
                wrapperClassName: "Typewriter__wrapper",
              }}
            />
          </p>
        )}
      </div>
    </Row>
  );
};
export default TypeWrite;
