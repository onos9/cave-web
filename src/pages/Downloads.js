import { faFileWord } from "@fortawesome/free-regular-svg-icons";
import {
  faEnvelope,
  faFile,
  faFileAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
} from "@themesberg/react-bootstrap";
import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "../api/axios";
import Preloader from "../components/Preloader";

export default () => {
  const { id } = useParams();
  const { search } = useLocation();
  const [loaded, setLoaded] = useState(false);
  const [upload, setUpload] = useState(false);
  const [title, setTitle] = useState("Download Reference Form");

  useEffect(() => {
    if (id === "upload") {
      setTitle("Upload Reference Form");
      setUpload(true);
    }
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  });

  return (
    <main>
      <Preloader show={loaded ? false : true} />
      <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
        <Container>
          <Row className="justify-content-center form-bg-image">
            <Col
              xs={12}
              className="d-flex align-items-center justify-content-center"
            >
              <div className="bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                <div className="text-center text-md-center mb-4 mt-md-0">
                  <h3 className="mb-0">{title}</h3>
                </div>
                {upload ? (
                  <Form
                    method="post"
                    encType="multipart/form-data"
                    action={`${process.env.REACT_APP_API_URI}/file/upload${search}`}
                    className="mt-4"
                  >
                    <Form.Group id="email" className="mb-4">
                      <InputGroup>
                        <InputGroup.Text>
                          <FontAwesomeIcon icon={faFileAlt} />
                        </InputGroup.Text>
                        <Form.Control
                          name="file"
                          autoFocus
                          required
                          type="file"
                          placeholder="example@company.com"
                        />
                      </InputGroup>
                    </Form.Group>
                    <Button variant="primary" type="submit" className="w-100">
                      upload
                    </Button>
                  </Form>
                ) : (
                  <Button
                    href={`${process.env.REACT_APP_API_URI}/file/download/${id}`}
                    variant="primary"
                    className="w-100"
                  >
                    Download
                  </Button>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};
