import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Typewriter from "typewriter-effect";

import "../Projects/projects.css";
import { cursor, MyProjects } from "../../utils/utils";

const Projects = () => {
  const [modalShow, setModalShow] = useState(null);
  const [allProjects, setAllProjects] = useState(MyProjects);

  const findProjectAndAddToModal = (id) => {
    const linkId = allProjects.projects.find((link) => link.idText === id);
    setModalShow(linkId);
  };
  const addOnClick = (project) => {
    const projects = document.getElementById(project);
    projects.addEventListener(
      "click",
      function () {
        findProjectAndAddToModal(project);
      },
      false
    );
  };

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
                    .callFunction(() =>
                      project.idText !== "" ? addOnClick(project.idText) : null
                    )
                    .callFunction(() => {
                      setAllProjects((prevState) => ({
                        projects: prevState.projects.map((project) =>
                          project.id === index + 1
                            ? { ...project, state: true }
                            : project
                        ),
                      }));
                    })
                    .callFunction(() => {
                      cursor("Typewriter__cursor3");
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
            <img src={modalShow.imgSrc} alt="project" />
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
