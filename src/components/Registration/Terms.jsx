import React, { useState, useEffect } from "react";
import { Form, Row, Col } from "@themesberg/react-bootstrap";

export default ({ title }) => {
  return (
    <>
      <div className="container">
        <h4 className="text-center">{title}</h4>
        <Form.Group className="mb-3">
          <Form.Control
            disabled
            name="terms"
            required
            as="textarea"
            rows="4"
            value="Enter your message..."
          />
        </Form.Group>
        <Row>
          <Form.Group className="mb-3">
            <Form.Check
              value="yes"
              name="agree"
              type="switch"
              required
              label="Agree to terms and conditions"
              feedback="You must agree before submitting."
              feedbacktype="invalid"
            />
          </Form.Group>
        </Row>
      </div>
    </>
  );
};
