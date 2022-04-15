import {
  Col, Row
} from "@themesberg/react-bootstrap"
import React, { useEffect } from "react"
import { Navigate, useLocation, useNavigate } from "react-router-dom"
import { Router } from "../../router"
import "./welcome.css"

export default () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const emailCheck = (email) => {
    var regExp = new RegExp("[a-z0-9.-_]*@gmail.com$", "i");
    return !!data.email.match(regExp);
  };

  useEffect(() => {
    //if (!state?.required) navigate(Router.Admission.path, { replace: true });
  },[state]);

  return (
    <>
      <Row>
        <Col xs={12} sm={12} xl={8} className="mb-4">
          <Row className="mb-3 mb-lg-5">
            <Col xs={12} className="text-center">
              <h2 className="px-lg-5">
                {"Welcome To Adullam Registration Portal!"}
              </h2>
              <p className="lead px-lg-6">
                {
                  "We will now guide you through the registration process. Please fill in all required feilds in order to complete your registration."
                }
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};
