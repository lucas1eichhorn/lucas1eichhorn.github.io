import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
const Project = ({ project, qty, index }) => {
  const { name, description, subtitle, image } = project;
  const [show, setShow] = useState(false);

  let column;
  if (qty % 2 == 0) {
    column = "col-md-4";
  } else {
    column = index % 6 < 2 ? "col-md-6" : "col-md-4";
  }
  return (
    <div className={`${column} p-2 item`} key={index}>
      <div className="card h-100">
        <Button
          variant="transparent"
          className="text-left p-0"
          onClick={() => setShow(!show)}
        >
          <div className="card-body">
            <div className="row">
              <div className="overflow">
                <img
                  src={`images/projects/${image}`}
                  alt={name}
                  className="card-img-top"
                />
              </div>
            </div>
            <h3 className="mt-3">{name}</h3>
            <h6>{subtitle}</h6>
            
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
            <h3>{name}</h3>
            <h4>{subtitle}</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="project-description">{description}</p>
          <img
            src={`images/projects/${image}`}
            alt={name}
            className="img-fluid my-4"
          />
        </Modal.Body>
      </Modal>
    </div>
  );
};
export default Project;
