import { Container, Modal, Button } from "@themesberg/react-bootstrap";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import { Router } from "../../router";
import useMailer from "../../hooks/useMailer";

export default ({ showDefault, handleClose }) => {
  const navigate = useNavigate();
  const { mailer, mailState } = useMailer();

  useEffect(() => {
    const mail = {
      fromAddress: "admin@adullam.ng",
      toAddress: "onosbrown.saved@gmail.com",
      subject: "Reference Form",
      content: {
        name: "Reference Form",
        download_link: `${process.env.REACT_APP_SERVER_URI}/downloads/ref_form.docx`,
        upload_link: `${process.env.REACT_APP_SERVER_URI}/downloads/upload`,
      },
    };
    // mailer.sendMail(mail);
  }, [mailer]);

  return (
    <>
      <Container style={{ paddingTop: "2rem" }}>
        <Modal
          as={Modal.Dialog}
          centered
          show={showDefault}
          onHide={ handleClose }
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
                navigate(Router.Registration.path, { redirect: true })
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
