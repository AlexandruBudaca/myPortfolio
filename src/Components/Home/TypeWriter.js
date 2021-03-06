import React from "react";
import Typewriter from "typewriter-effect";

import "./Home.css";
import { cursor } from "../../utils/utils";
const TypeWrite = ({ page, setTyping, typing }) => {
  return (
    <>
      {page.pages[0].state && (
        <div className="type-write">
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
    </>
  );
};
export default TypeWrite;
