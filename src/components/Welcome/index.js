import { Col, Row } from "@themesberg/react-bootstrap";
import React, { useEffect } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { Router } from "../../router";
import "./welcome.css";

export default () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const emailCheck = (email) => {
    var regExp = new RegExp("[a-z0-9.-_]*@gmail.com$", "i");
    return !!data.email.match(regExp);
  };

  useEffect(() => {
    //if (!state?.required) navigate(Router.Admission.path, { replace: true });
  }, [state]);

  return (
    <>
      <Row className="mb-3 mb-lg-5">
        <h3>{"Welcome To Adullam Registration Portal!"}</h3>
        <p className="lead">
          {
            "We will now guide you through the registration process. Please fill in all required feilds in order to complete your registration."
          }
        </p>
      </Row>
    </>
  );
};
