import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const ProjectModal = () => {
  return (
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
  );
};

export default ProjectModal;
