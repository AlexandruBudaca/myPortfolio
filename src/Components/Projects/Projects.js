import React from "react";
import CardProject from "./CardProject";

const Projects = () => {
  return (
    <div className="projects-main">
      <h2>
        Projects <span>></span>
      </h2>
      <hr />
      <div className="projects">
        <div className="container-projects">
          <CardProject
            imgSrc={
              "https://coryrylan.com/assets/images/posts/types/javascript-1280x960.png"
            }
          />
          <CardProject
            imgSrc={
              "https://www.freecodecamp.org/news/content/images/2020/01/js-image.jpeg"
            }
          />
          <CardProject
            imgSrc={
              "https://images.ctfassets.net/yr4qj72ki4ky/legacyBlogPost77Thumbnail/cd4783ad7b35efc4367166a570a9952e/bigstock-Real-Java-Script-Code-Developi-217215433.jpg"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
