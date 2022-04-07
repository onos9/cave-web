import { Col, Form, Row } from "@themesberg/react-bootstrap"
import React from "react"

export default ({ title }) => {
  return (
    <>
      <div className="container">
        <h4 className="text-center">{title}</h4>
        <Row>
          <Form.Group as={Col} controlId="formGridPassword" className="mb-3">
            <Form.Label>Fullname </Form.Label>
            <Form.Control
              name="firstRefereeName"
              required
              type="text"
              placeholder="Enter full name of first referee"
            />
            <Form.Control.Feedback type="valid">
              Looks good!
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col} controlId="formGridPassword" className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              name="firstRefereeEmail"
              required
              type="email"
              placeholder="Enter first referee email"
            />
            <Form.Control.Feedback type="valid">
              Looks good!
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPassword" className="mb-3">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              name="firstRefereePhone"
              required
              type="tel"
              placeholder="Enter phone number"
            />
            <Form.Control.Feedback type="valid">
              Looks good!
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col} controlId="formGridPassword" className="mb-3">
            <Form.Label>Fullname</Form.Label>
            <Form.Control
              name="secondRefereeName"
              required
              type="text"
              placeholder="Enter full name of Second referee"
            />
            <Form.Control.Feedback type="valid">
              Looks good!
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col} controlId="formGridPassword" className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              name="secondRefereeEmail"
              required
              type="email"
              placeholder="Enter second referee email"
            />
            <Form.Control.Feedback type="valid">
              Looks good!
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPassword" className="mb-3">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              name="secondRefereePhone"
              required
              type="tel"
              placeholder="Enter phone number"
            />
            <Form.Control.Feedback type="valid">
              Looks good!
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
      </div>
    </>
  );
};
