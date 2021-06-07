import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
const Project = ({ project, index }) => {
  const { name, description, subtitle, image } = project;
  const [show, setShow] = useState(false);

  return (
    <div className="col-md-4 p-2" key={index}>
      <div className="card h-100">
        <Button
          variant="transparent"
          className="text-left p-0"
          onClick={() => setShow(true)}
        >
          <div className="overflow">
            <img
              src={`images/projects/${image}`}
              alt={name}
              className="card-img-top"
            />
          </div>
          <div className="card-body">
            <h3>{name}</h3>
            <h6>{subtitle}</h6>
            <p>{description}</p>
          </div>
        </Button>
      </div>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        size="lg"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            {name}
            <h6>{subtitle}</h6>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{description}</p>
        </Modal.Body>
      </Modal>
    </div>
  );
};
export default Project;
