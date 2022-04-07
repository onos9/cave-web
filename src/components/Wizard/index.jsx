import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form } from "@themesberg/react-bootstrap";
import React, { useState, useEffect } from "react";
import {useLocation} from "react-router-dom"
import Background from "../Registration/Background";
import BioData from "../Registration/BioData";
import Health from "../Registration/Health";
import Referee from "../Registration/Referee";
import Terms from "../Registration/Terms";
import Qualification from "./../Registration/Qualification";
import Done from "./Done";
import Progress from "./Progress";
import useAuth from "../../hooks/useAuth";
import "./wizard.css";

const steps = [
  {
    id: "bioData",
    Component: BioData,
    title: "Student Information",
  },
  {
    id: "qualification",
    Component: Qualification,
    title: "Educational Qualification",
  },
  {
    id: "background",
    Component: Background,
    title: "Spiritual Background",
  },
  {
    id: "health",
    Component: Health,
    title: "Health Information",
  },
  {
    id: "referees",
    Component: Referee,
    title: "Refree Information",
  },
  {
    id: "terms",
    Component: Terms,
    title: "Terms & Conditions",
  },
];

const dump = {};

const Wizard = () => {
  const [formData, setFormData] = useState({});
  const [showDefault, setShowDefault] = useState(false);
  const [step, setStep] = useState(0);
  const { auth, authState } = useAuth();
  const { state } = useLocation();

  const handleClose = () => setShowDefault(true);
  const nextPrevStep = (stepIndex) => setStep(step + stepIndex);
  const handleUpdate = () => {
    console.log(formData);
    //auth.signin({ email: "onosbrown.saved@gmail", password: "1234" });
    //auth.updateOne(formData, authState.user.id);
  };

  useEffect(() => {
    console.log(state);
    if (step === steps.length) {
      const referee = formData?.referees;
      formData.referees = [
        {
          fullName: referee?.firstRefereeName,
          email: referee?.firstRefereeEmail,
          phone: referee?.firstRefereePhone,
        },
        {
          fullName: referee?.secondRefereeName,
          email: referee?.secondRefereeEmail,
          phone: referee?.secondRefereePhone,
        },
      ];
      formData.terms.agree = formData.terms.agree === "on";
      formData.programOption = state?.programOption;
      formData.program = state?.program
      setShowDefault(true);
      auth.updateOne(formData, authState.user.id);
    }
  }, [step]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Go back to the previous step
    if (!!document.activeElement.id) {
      nextPrevStep(-1);
      return;
    }
    // Go to the next step
    nextPrevStep(1);

    // Get current form data
    const formData = new FormData(document.forms.register);
    let data = {};
    for (var key of formData.keys()) {
      data = { ...data, [key]: formData.get(key) };
    }

    const form = steps.filter((s, i) => i === step)[0].id;

    // append current form data to state
    setFormData((prev) => ({
      ...prev,
      [form]: { ...prev[form], ...data },
    }));
  };

  return (
    <>
      <div id="regForm">
        <Done
          handleUpdate={handleUpdate}
          handleClose={handleClose}
          showDefault={showDefault}
        />
        {step < steps.length ? (
          <>
            <div className="all-steps" id="all-steps">
              <Progress step={step} />
            </div>

            <div className="container">
              <Form onSubmit={handleSubmit} id="register" validated={false}>
                {steps.map(({ Component, title }, i) =>
                  i === step ? (
                    <Component key={i} title={title} />
                  ) : null
                )}

                <div className="nextprevious" id="nextprevious">
                  <div className="btn-nextprevious">
                    {step > 0 ? (
                      <button formNoValidate id="prevBtn">
                        <i className="material-icons">
                          <FontAwesomeIcon
                            color="white"
                            icon={faAngleDoubleLeft}
                          />
                        </i>
                      </button>
                    ) : null}
                    <button formNoValidate >
                      <i className="material-icons">
                        <FontAwesomeIcon
                          color="white"
                          icon={faAngleDoubleRight}
                        />
                      </i>
                    </button>
                  </div>
                </div>
              </Form>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
};

export default Wizard;
