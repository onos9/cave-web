import React, { useState, useEffect } from "react";
import { Form, Row, Col } from "@themesberg/react-bootstrap";

export default ({ title }) => {
  return (
    <>
      <div className="container">
        <h4 className="text-center">{title}</h4>
        <Form.Group as={Col} controlId="formGridClass" className="mb-3">
          <Form.Label>Instutution</Form.Label>
          <Form.Select name="institution" required>
            <option> Choose an instutution</option>
            <option>Unversity</option>
            <option>Polytechnic</option>
            <option>Colledge od Education</option>
          </Form.Select>
          <Form.Control.Feedback type="valid">
            Looks good!
          </Form.Control.Feedback>
        </Form.Group>
        <Row className=" mb-3">
          <Form.Group as={Col} controlId="formGridClass" className="mb-3">
            <Form.Label>Degree</Form.Label>
            <Form.Select name="degree" required>
              <option>Choose a Degree</option>
              <option>Bsc</option>
              <option>Msc</option>
              <option>HND</option>
              <option>OND</option>
              <option>LLB</option>
              <option>LLM</option>
            </Form.Select>
            <Form.Control.Feedback type="valid">
              Looks good!
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className=" mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Name of Instutution</Form.Label>
            <Form.Control
              name="institutionName"
              required
              type="text"
              placeholder="Name of instutution"
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Year of Graduation</Form.Label>
            <Form.Control
              name="graduationYear"
              required
              type="text"
              placeholder="Year of graduation"
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
      </div>
    </>
  );
};
