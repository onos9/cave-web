import React, { useState, useEffect } from "react";
import { Form, Row, Col, Button } from "@themesberg/react-bootstrap";

export default ({ title, handleAdd }) => {
  const [data, setData] = useState({});
  const [creds, setCreds] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <h4 className="text-center">{title}</h4>
      <Form.Group
        as={Col}
        controlId="formGridClass"
        className="mb-3"
      >
        <Form.Label>Instutution</Form.Label>
        <Form.Select name={"institution"} required onChange={handleChange}>
          <option> Choose an instutution</option>
          <option>Secondary School</option>
          <option>Colledge of Education</option>
          <option>Polytechnic</option>
          <option>Unversity</option>
        </Form.Select>
        <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
      </Form.Group>
      <Row className=" mb-3">
        <Form.Group
          as={Col}
          controlId="formGridClass"
          className="mb-3"
        >
          <Form.Label>Degree</Form.Label>
          <Form.Select name={"degree"} required onChange={handleChange}>
            <option>Choose a Degree</option>
            <option>SSCE</option>
            <option>HND</option>
            <option>BSc/BA</option>
            <option>MSc/MA</option>
            <option>PhD</option>
          </Form.Select>
          <Form.Control.Feedback type="valid">
            Looks good!
          </Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Row className=" mb-4">
        <Form.Group xs={12} sm={6} as={Col} controlId="formGridEmail">
          <Form.Label>Name of Instutution</Form.Label>
          <Form.Control
            onChange={handleChange}
            name={"institutionName"}
            required
            type="text"
            placeholder="Name of instutution"
          />
          <Form.Control.Feedback type="invalid">
            Please choose a username.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group xs={12} sm={6} as={Col} controlId="formGridEmail">
          <Form.Label>Year of Graduation</Form.Label>
          <Form.Control
            onChange={handleChange}
            name={"graduationYear"}
            required
            type="text"
            placeholder="Year of graduation"
          />
          <Form.Control.Feedback type="invalid">
            Please choose a username.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Button variant="outline-gray" onClick={() => handleAdd(data)} size="sm">
        Add Credential
      </Button>
    </>
  );
};
