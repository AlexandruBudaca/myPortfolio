import React from "react";
import CardProject from "./CardProject";
import data from "../../data.json";

import "../Projects/projects.css";

const Projects = () => {
  return (
    <div className="projects-main">
      <h2>
        Projects <span>></span>
      </h2>
      <hr />
      <div className="projects">
        <div className="container-projects">
          {data.map((project) => (
            <CardProject {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
