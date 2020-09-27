import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Typewriter from "typewriter-effect";

import "./header.css";
import { typingTerminal } from "../../utils/utils";
const TypeWrite = () => {
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setNavbar(true);
    }, 13500);
  });
  const cursor = () => {
    let cursors = document.getElementsByClassName("Typewriter__cursor");
    let i;
    for (i = 0; i < cursors.length; i++) {
      cursors[i].style.color = "black";
    }
  };

  const [typing, setTyping] = useState(typingTerminal);

  return (
    <>
      <Row>
        <div lg={12} className="type-write">
          {typing.type.map((test, index) => {
            return (
              typing.type[index].state && (
                <Typewriter
                  key={test.id}
                  onInit={(typewriter) => {
                    typewriter
                      .start()
                      .pasteString(`${test.pasteString}`)
                      .typeString(`${test.text}`)
                      .callFunction(() => {
                        cursor();
                      })
                      .callFunction(() => {
                        setTyping((prevState) => ({
                          type: prevState.type.map((line) =>
                            line.id === index + 1
                              ? { ...line, state: true }
                              : line
                          ),
                        }));
                      });
                  }}
                  options={{
                    delay: 20,
                    cursorClassName: "Typewriter__cursor",
                    wrapperClassName: "Typewriter__wrapper",
                  }}
                />
              )
            );
          })}
          {navbar && (
            <div id="navbar">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .start()
                    .typeString(
                      `<a href="www.google.com" target="_blank">About</a> <a>Project</a>  <a>Contact</a>`
                    );
                }}
                options={{
                  delay: 30,
                  cursorClassName: "Typewriter__cursor",
                  wrapperClassName: "Typewriter__wrapper",
                }}
              />
            </div>
          )}
        </div>
      </Row>
    </>
  );
};
export default TypeWrite;
