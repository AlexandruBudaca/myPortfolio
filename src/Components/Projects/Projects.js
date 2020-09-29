import React from "react";
import CardProject from "./CardProject";
import data from "../../utils/data.json";
import Terminal from "../Header/Terminal";

import "../Projects/projects.css";

const Projects = () => {
  return (
    <div className="projects-main">
      <Terminal />
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
