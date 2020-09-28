import React, { useState } from "react";
import { Row } from "react-bootstrap";
import Typewriter from "typewriter-effect";

import "./header.css";
import { typingTerminal } from "../../utils/utils";

const TypeWrite = () => {
  const [typing, setTyping] = useState(typingTerminal);

  const cursor = () => {
    let cursors = document.getElementsByClassName("Typewriter__cursor");
    let i;
    for (i = 0; i < cursors.length; i++) {
      cursors[i].style.color = "black";
    }
  };

  return (
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
                  // .callFunction(() => {
                  //   const some = typing.type.find((line) => line.id === 11);
                  //   typing.type.map((type) =>
                  //     some.state ? setNavbar(true) : null
                  //   );
                  // });
                }}
                options={{
                  delay: 15,
                  cursorClassName: "Typewriter__cursor",
                  wrapperClassName: "Typewriter__wrapper",
                }}
              />
            )
          );
        })}
      </div>
    </Row>
  );
};
export default TypeWrite;
