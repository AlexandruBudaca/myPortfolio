import React from "react";

import "./contact.css";

const Contact = () => {
  return (
    <div className="contact-section">
      <h2>
        Contact <span>></span>
      </h2>
      <hr />
      <div className="contact">
        <form className="input-form" id="usrform">
          <input placeholder="First name" type="text" required />
          <input placeholder="Surname" type="text" required />
          <input
            placeholder="E-mail"
            type="email"
            pattern=".+@globex.com"
            size="30"
            required
          />
          <textarea rows="4" cols="50" name="comment" form="usrform">
            Enter your message here...
          </textarea>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
