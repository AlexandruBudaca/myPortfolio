import React from "react";
import Typewriter from "typewriter-effect";

import { cursor } from "../../utils/utils";

import "./contact.css";

const Contact = () => {
  return (
    <div className="contact-section">
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .start()
            .typeString(`Catford, London`)
            .callFunction(() => {
              cursor("Typewriter__cursor_contact");
            });
        }}
        options={{
          delay: 10,
          cursorClassName: "Typewriter__cursor_contact",
          wrapperClassName: "Typewriter__wrapper",
        }}
      />
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .start()
            .typeString(`<span>~</span> 07878318952`)
            .callFunction(() => {
              cursor("Typewriter__cursor_contact");
            });
        }}
        options={{
          delay: 10,
          cursorClassName: "Typewriter__cursor_contact",
          wrapperClassName: "Typewriter__wrapper",
        }}
      />
      <Typewriter
        onInit={(typewriter) => {
          typewriter.start()
            .typeString(` <a id="email" href="mailto:alexandru.budaca.i@gmail.com" target="_blank">
        <span>~</span> alexandru.budaca.i@gmail.com
      </a>`);
        }}
        options={{
          delay: 10,
          cursorClassName: "Typewriter__cursor_email",
          wrapperClassName: "Typewriter__wrapper",
        }}
      />
    </div>
  );
};

export default Contact;
