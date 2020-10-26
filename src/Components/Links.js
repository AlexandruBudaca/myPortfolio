import React from "react";

import cv from "../assets/CV_Alex_B.pdf";

const Links = () => {
  return (
    <div className="links">
      <ul>
        <li>
          <a href={cv} target="_blank" rel="noopener noreferrer" className="CV">
            Cv
          </a>
        </li>
        <li>
          <a
            href="https://github.com/AlexandruBudaca"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/alexandru-budaca/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/alexandrubudacaioan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook"></i>
          </a>
        </li>
      </ul>
      <p> © Alexandru Budaca</p>
    </div>
  );
};
export default Links;
