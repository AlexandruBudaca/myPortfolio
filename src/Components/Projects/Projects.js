import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Typewriter from "typewriter-effect";

import "../Projects/projects.css";
import { MyProjects } from "../../utils/MyprojectsData";
import { cursor } from "../../utils/utils";

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
              <div className="bubbles">
                <div className="bubble1"></div>
                <div className="bubble2"></div>
                <div className="bubble3"></div>
              </div>
              {modalShow.name}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={modalShow.imgSrc} alt="project" />
            <p className="description">{modalShow.description}</p>
            <p className="responsibilities">Responsibilities: </p>
            <ul>
              {modalShow.responsibilities.map((responsibility) => (
                <li>{responsibility}</li>
              ))}
            </ul>
            <p className="responsibilities">Achievements: </p>
            <ul>
              {modalShow.achievements.map((achievements) => (
                <li>{achievements}</li>
              ))}
            </ul>
          </Modal.Body>
          <Modal.Footer>
            <div className="project-links">
              <a
                href={modalShow.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>

              <a
                href={modalShow.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>
            </div>
            <Button onClick={() => setModalShow(null)}>Close</Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};

export default Projects;
