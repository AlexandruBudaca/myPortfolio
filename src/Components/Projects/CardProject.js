import React from "react";

const CardProject = (props) => {
  return (
    <div className="card-project">
      {" "}
      <img src={props.imgSrc} alt="project-img" />
      <div>
        <h4>{props.name}</h4>{" "}
        <p>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate.
        </p>
      </div>
      <div className="btn-card-project">
        <button>
          {" "}
          <i className="fab fa-github" />
        </button>
        <button>See Live</button>
      </div>
    </div>
  );
};
export default CardProject;
