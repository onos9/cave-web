import { Col, Form, Row } from "@themesberg/react-bootstrap"
import React from "react"

export default ({ title }) => {
  return (
    <>
      <div className="container">
        <h4 className="text-center">{title}</h4>
        <Row className=" mb-3">
          <Form.Group as={Col} controlId="formGridClass" className="mb-3">
            <Form.Label>Are you bornagain?</Form.Label>
            <Form.Select name="bornAgain" required>
              <option hidden>choose...</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </Form.Select>
            <Form.Control.Feedback type="valid">
              Looks good!
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridClass" className="mb-3">
            <Form.Label>Water baptism?</Form.Label>
            <Form.Select name="waterBaptisim" required>
              <option hidden>choose...</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </Form.Select>
            <Form.Control.Feedback type="valid">
              Looks good!
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridClass" className="mb-3">
            <Form.Label>Holyghost baptism?</Form.Label>
            <Form.Select name="holyghostBaptism" required>
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
            <Form.Label>Are you into ministry?</Form.Label>
            <Form.Select name="intoMinistry" required>
              <option hidden>choose...</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </Form.Select>
            <Form.Control.Feedback type="valid">
              Looks good!
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridClass" className="mb-3">
            <Form.Label>What's your call?</Form.Label>
            <Form.Control name="godsCall" type="text" placeholder="Your call" />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} controlId="formGridPassword" className="mb-3">
            <Form.Label>Brief Salvation History</Form.Label>
            <Form.Control
              name="briefSalvation"
              as="textarea"
              rows="4"
              placeholder="Write a short note about your salvation experience..."
            />
          </Form.Group>
        </Row>

        <Row className=" mb-3">
          <Form.Group as={Col} controlId="formGridClass" className="mb-3">
            <Form.Label>Why are you applying?</Form.Label>
            <Form.Control
              name="reason"
              type="text"
              placeholder="Reason for application..."
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridClass" className="mb-3">
            <Form.Label>Involved with any church?</Form.Label>
            <Form.Control
              name="churchInvolve"
              type="text"
              placeholder="Church Name..."
            />
            <Form.Control.Feedback type="valid">
              Looks good!
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className=" mb-3">
          <Form.Group as={Col} controlId="formGridClass" className="mb-3">
            <Form.Label>Pastor's name?</Form.Label>
            <Form.Control
              name="pastorName"
              type="text"
              placeholder="Enter Pastor's name'..."
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridClass" className="mb-3">
            <Form.Label>Pastor's Email?</Form.Label>
            <Form.Control
              name="pastorEmail"
              type="email"
              placeholder="Enter Email.."
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridClass" className="mb-3">
            <Form.Label>Pastor's Phone Number</Form.Label>
            <Form.Control
              name="pastorPhone"
              type="tel"
              placeholder="Phone Number..."
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>
      </div>
    </>
  );
};
