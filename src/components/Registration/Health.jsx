import React, { useState, useEffect } from "react";
import { Form, Row, Col } from "@themesberg/react-bootstrap";

const jsonData = ["Yes", "No"];

export default ({ title }) => {
  return (
    <>
      <div className="container">
        <h4 className="text-center">{title}</h4>
        <Row className=" mb-3">
          <Form.Group as={Col} controlId="formGridClass" className="mb-3">
            <Form.Label>Any Disability?</Form.Label>
            <Form.Select name="disability" required>
              <option hidden>choose...</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </Form.Select>
            <Form.Control.Feedback type="valid">
              Looks good!
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridClass" className="mb-3">
            <Form.Label>Any Nervous</Form.Label>
            <Form.Select name="nervous" required>
              <option hidden>choose...</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </Form.Select>
            <Form.Control.Feedback type="valid">
              Looks good!
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridClass" className="mb-3">
            <Form.Label>Are you Anorexic?</Form.Label>
            <Form.Select name="anorexic" required>
              <option hidden>choose...</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </Form.Select>
            <Form.Control.Feedback type="valid">
              Looks good!
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className=" mb-3">
          <Form.Group as={Col} controlId="formGridClass" className="mb-3">
            <Form.Label>Are you Diabetic?</Form.Label>
            <Form.Select name="diabetic" required>
              <option hidden>choose...</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </Form.Select>
            <Form.Control.Feedback type="valid">
              Looks good!
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridClass" className="mb-3">
            <Form.Label>Are you Epileptic?</Form.Label>
            <Form.Select name="epileptic" required>
              <option hidden>choose...</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </Form.Select>
            <Form.Control.Feedback type="valid">
              Looks good!
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridClass" className="mb-3">
            <Form.Label>Any Special Diet</Form.Label>
            <Form.Select name="specialDiet" required>
              <option hidden>choose...</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </Form.Select>
            <Form.Control.Feedback type="valid">
              Looks good!
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className=" mb-3">
          <Form.Group as={Col} controlId="formGridClass" className="mb-3">
            <Form.Label>Any learning Disability?</Form.Label>
            <Form.Select name="learningDisability" required>
              <option hidden>choose...</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </Form.Select>
            <Form.Control.Feedback type="valid">
              Looks good!
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridClass" className="mb-3">
            <Form.Label>Used any Illigal Drug?</Form.Label>
            <Form.Select name="illigalDrug" required>
              <option hidden>choose...</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </Form.Select>
            <Form.Control.Feedback type="valid">
              Looks good!
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridClass" className="mb-3">
            <Form.Label>Any drug Addction?</Form.Label>
            <Form.Select name="drugAddction" required>
              <option hidden>choose...</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </Form.Select>
            <Form.Control.Feedback type="valid">
              Looks good!
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className=" mb-3">
          <Form.Group as={Col} controlId="formGridClass" className="mb-3">
            <Form.Label>Had any surgery?</Form.Label>
            <Form.Select name="surgery" required>
              <option hidden>choose...</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </Form.Select>
            <Form.Control.Feedback type="valid">
              Looks good!
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridClass" className="mb-3">
            <Form.Label>Any stomach Ulcer?</Form.Label>
            <Form.Select name="stomachUlcer" required>
              <option hidden>choose...</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </Form.Select>
            <Form.Control.Feedback type="valid">
              Looks good!
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col} controlId="formGridClass" className="mb-3">
            <Form.Label>Describe any other health issues</Form.Label>
            <Form.Control
              name="healthIssues"
              as="textarea"
              rows="4"
              placeholder="Enter description..."
            />
          </Form.Group>
        </Row>
      </div>
    </>
  );
};
