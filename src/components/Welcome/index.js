import React, { useState, useEffect } from "react";
import {
  Form,
  Row,
  Col,
  Button,
  Container,
  Alert,
} from "@themesberg/react-bootstrap";
import { useNavigate, useLocation, Navigate } from "react-router-dom";
import "./welcome.css";
import { Router } from "../../router";

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
          <Row className="">
            <Col xs={12}>
              <h5 className="px-lg-0">{"Entry Requirements"}</h5>
              {state?.required ? (
                <ul>
                  {state?.required.map((requirement, i) => (
                    <li key={i}>
                      <p>{requirement}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <Navigate to={Router.Admission.path} state={{ from: location }}/>
              )}
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};
