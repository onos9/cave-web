import { Container, Modal, Button } from "@themesberg/react-bootstrap";
import { useNavigate } from "react-router-dom";
import React from "react";
import { Router } from "../../router";

export default ({ showDefault, handleClose }) => {
  const navigate = useNavigate();
  return (
    <>
      <Container style={{ paddingTop: "2rem" }}>
        <Modal
          as={Modal.Dialog}
          centered
          show={showDefault}
          onHide={handleClose}
        >
          <Modal.Header>
            <Modal.Title className="h6">Congratulations!</Modal.Title>
            {/* <Button variant="close" aria-label="Close" onClick={handleClose} /> */}
          </Modal.Header>
          <Modal.Body>
            <p>
              {`Your Data has been successfully updated and a mail sent to you.`}
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() =>
                navigate(Router.Presentation.path, { redirect: true })
              }
            >
              Got It
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </>
  );
};
