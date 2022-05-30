import { Col, Form, Row } from "@themesberg/react-bootstrap";
import React, { useState } from "react";

export default ({ title }) => {
  const [disabled, setDisabled] = useState(true);

  const handleChange = (e) => {
    setDisabled(e.target.value === "No");
  };

  return (
    <>
      <h4 className="text-center">{title}</h4>
      <Row className=" mb-3">
        <Form.Group
          xs={12}
          sm={6}
          as={Col}
          controlId="formGridClass"
          className="mb-3"
        >
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
        <Form.Group
          xs={12}
          sm={6}
          as={Col}
          controlId="formGridClass"
          className="mb-3"
        >
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
      </Row>
      <Form.Group as={Col} controlId="formGridClass" className="mb-3">
        <Form.Label>Holyghost baptism?</Form.Label>
        <Form.Select name="holyghostBaptism" required>
          <option hidden>choose...</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </Form.Select>
        <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
      </Form.Group>

      <Row className=" mb-3">
        <Form.Group
          xs={12}
          sm={6}
          as={Col}
          controlId="formGridClass"
          className="mb-3"
        >
          <Form.Label>Speak in tongues?</Form.Label>
          <Form.Select name="speakTongues" required>
            <option hidden>choose...</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </Form.Select>
          <Form.Control.Feedback type="valid">
            Looks good!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group
          xs={12}
          sm={6}
          as={Col}
          controlId="formGridClass"
          className="mb-3"
        >
          <Form.Label>Are you into ministry?</Form.Label>
          <Form.Select name="intoMinistry" required>
            <option hidden>choose...</option>
            <option>No</option>
            <option>Founder</option>
            <option>Senior Pastor</option>
            <option>Associate Pastor</option>
            <option>Elder</option>
            <option>Elder</option>
            <option>Worker</option>
          </Form.Select>
          <Form.Control.Feedback type="valid">
            Looks good!
          </Form.Control.Feedback>
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
        <Form.Group
          xs={12}
          sm={6}
          as={Col}
          controlId="formGridClass"
          className="mb-3"
        >
          <Form.Label>Why are you applying?</Form.Label>
          <Form.Control
            name="reason"
            type="text"
            placeholder="Motivation for application..."
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group
          xs={12}
          sm={6}
          as={Col}
          controlId="formGridClass"
          className="mb-3"
        >
          <Form.Label>Church involved with</Form.Label>
          <Form.Select
            name="churchInvolve"
            required
            onChange={(e) => handleChange(e)}
          >
            <option hidden>choose...</option>
            <option>Yes</option>
            <option>No</option>
          </Form.Select>
          <Form.Control.Feedback type="valid">
            Looks good!
          </Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Row className=" mb-3">
        <Form.Group
          xs={12}
          sm={6}
          as={Col}
          controlId="formGridClass"
          className="mb-3"
        >
          <Form.Label>Church name?</Form.Label>
          <Form.Control
            disabled={disabled}
            name="churchName"
            type="text"
            placeholder="Enter Church's name'..."
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridClass" className="mb-3">
          <Form.Label>Pastor's Email?</Form.Label>
          <Form.Control
            disabled={disabled}
            name="pastorEmail"
            type="text"
            placeholder="Enter Church's name'..."
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group as={Col} controlId="formGridClass" className="mb-3">
        <Form.Label>Pastor's Phone Number</Form.Label>
        <Form.Control
          disabled={disabled}
          name="pastorName"
          type="email"
          placeholder="Enter Email.."
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>
    </>
  );
};
