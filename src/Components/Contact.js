import React from "react";

const Contact = () => {
  return (
    <div className="contact-section">
      <h2>
        Contact <span>></span>
      </h2>
      <hr />
      <div className="contact">
        <form className="input-form">
          <input placeholder="First name" type="text" required />
          <input placeholder="Surname" type="text" required />
          <input
            placeholder="E-mail"
            type="email"
            pattern=".+@globex.com"
            size="30"
            required
          />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
