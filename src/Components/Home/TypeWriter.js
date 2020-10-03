import React from "react";
import { Row } from "react-bootstrap";
import Typewriter from "typewriter-effect";

import "./Home.css";
import { cursor } from "../../utils/utils";
const TypeWrite = ({ setNavbar, page, setTyping, typing }) => {
  return (
    <Row>
      {page.pages[0].state && (
        <div lg={12} className="type-write">
          {typing.type.map((type, index) => {
            return (
              typing.type[index].state && (
                <Typewriter
                  key={type.id}
                  onInit={(typewriter) => {
                    typewriter
                      .start()
                      .pasteString(`${type.pasteString}`)
                      .typeString(`${type.text}`)
                      .callFunction(() => {
                        cursor("Typewriter__cursor");
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
                    delay: 5,
                    cursorClassName: "Typewriter__cursor",
                    wrapperClassName: "Typewriter__wrapper",
                  }}
                />
              )
            );
          })}
        </div>
      )}
    </Row>
  );
};
export default TypeWrite;
