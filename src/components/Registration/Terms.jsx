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
            rows="15"
            value={`I certify that the information I provided on this application is complete and accurate to the best of my knowledge, and that Adullam (RCN Bible Seminary) is authorized to make whatever enquiries are necessary to certify the accuracy of my records. I have read through, fully understand & agree to the above "Conditions of Enrolment" and the Financial payment option. I agree to unreservedly carry out my studies and duties in accordance with this agreement at all times to the best of my ability. Further, I consent to the use of reference letters and reference checks in evaluating my application. If accepted as a student at Adullam, and in consideration thereof, I will submit cheerfully to all the regulations and policies of the seminary and seek to maintain a high standard of Christian integrity and conduct. I also agree that upon admission that unreserved right be afforded the Seminary to authorize my medical treatment when need arise under the recommendations of a qualified medical personnel.`}
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
