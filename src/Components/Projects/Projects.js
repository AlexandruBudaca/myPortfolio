import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Typewriter from "typewriter-effect";

import "../Projects/projects.css";

const Projects = () => {
  const [modalShow, setModalShow] = useState(null);

  const [allProjects, setAllProjects] = useState({
    projects: [
      {
        id: 0,
        idText: "overTheLine",
        text: `<span>1. </span> <span id="overTheLine">Over the line</span>`,
        state: true,
        imgSrc:
          "https://coryrylan.com/assets/images/posts/types/javascript-1280x960.png",
        name: "Project1",
        description:
          "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate.",
      },
      {
        id: 1,
        idText: "seeTheFuture",
        text: `<span>2. </span> <span id="seeTheFuture">See the future </span>`,
        state: false,
        imgSrc:
          "https://www.freecodecamp.org/news/content/images/2020/01/js-image.jpeg",
        name: "Project2",
        description:
          "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate.",
      },
      {
        id: 2,
        idText: "chatApp",
        text: `<span>3. </span> <span id="chatApp">Chat App</span>`,
        state: false,
        imgSrc:
          "https://images.ctfassets.net/yr4qj72ki4ky/legacyBlogPost77Thumbnail/cd4783ad7b35efc4367166a570a9952e/bigstock-Real-Java-Script-Code-Developi-217215433.jpg",
        name: "Project3",
        description:
          "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate.",
      },
    ],
  });
  const cursor2 = () => {
    let cursors = document.getElementsByClassName("Typewriter__cursor3");
    let i;
    for (i = 0; i < cursors.length; i++) {
      cursors[i].style.color = "transparent";
    }
  };

  const myFunction = (id) => {
    const linkId = allProjects.projects.find((link) => link.idText === id);

    console.log(linkId);
    setModalShow(linkId);
  };
  const addOnClick = (project) => {
    const projects = document.getElementById(project);

    projects.addEventListener(
      "click",
      function () {
        myFunction(project);
      },
      false
    );
  };
  // function MyVerticallyCenteredModal(props) {
  //   return (

  //   );
  // }

  return (
    <>
      <div className="projects-main">
        {allProjects.projects.map((project, index) => {
          return (
            allProjects.projects[index].state && (
              <Typewriter
                key={project.id}
                onInit={(typewriter) => {
                  typewriter
                    .start()
                    .typeString(`${project.text}`)
                    .callFunction(() => {
                      addOnClick(project.idText);
                    })
                    .callFunction(() => {
                      setAllProjects((prevState) => ({
                        projects: prevState.projects.map((pro) =>
                          pro.id === index + 1 ? { ...pro, state: true } : pro
                        ),
                      }));
                    })
                    .callFunction(() => {
                      cursor2();
                    });
                }}
                options={{
                  delay: 10,
                  cursorClassName: "Typewriter__cursor3",
                  wrapperClassName: "Typewriter__wrapper",
                }}
              />
            )
          );
        })}
      </div>

      {Boolean(modalShow) && (
        <Modal
          animation={false}
          show={Boolean(modalShow)}
          onHide={() => setModalShow(null)}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              {modalShow.name}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={modalShow.imgSrc} alt="project-image" />
            <p>{modalShow.description}</p>
            <p>Test</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => setModalShow(null)}>Close</Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};

export default Projects;
