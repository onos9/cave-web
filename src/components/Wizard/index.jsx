import {
  faAngleDoubleLeft,
  faAngleDoubleRight, faBible, faGraduationCap, faHandshakeSlash, faNotesMedical,
  faUser, faUserShield
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Form } from "@themesberg/react-bootstrap"
import React, { useEffect, useState } from "react"
import useAuth from "../../hooks/useAuth"
import useUser from "../../hooks/useUser"
import Background from "../Registration/Background"
import BioData from "../Registration/BioData"
import Health from "../Registration/Health"
import Referee from "../Registration/Referee"
import Terms from "../Registration/Terms"
import Qualification from "./../Registration/Qualification"
import Done from "./Done"
import Progress from "./Progress"
import "./wizard.css"


const steps = [
  {
    id: "bioData",
    Component: BioData,
    title: "Student Information",
    Icon: faUser,
  },
  {
    id: "qualification",
    Component: Qualification,
    title: "Educational Qualification",
    Icon: faGraduationCap,
  },
  {
    id: "background",
    Component: Background,
    title: "Spiritual Background",
    Icon: faBible,
  },
  {
    id: "health",
    Component: Health,
    title: "Health Information",
    Icon: faNotesMedical,
  },
  {
    id: "referees",
    Component: Referee,
    title: "Refree Information",
    Icon: faUserShield,
  },
  {
    id: "terms",
    Component: Terms,
    title: "Terms & Conditions",
    Icon: faHandshakeSlash,
  },
];

const Wizard = () => {
  const [formData, setFormData] = useState({});
  const [showDefault, setShowDefault] = useState(false);
  const [stepper, setStep] = useState(0);
  const { user } = useUser();
  const { auth, authState } = useAuth();

  const [online, setOnline] = useState(
    authState?.user?.programOption === "Online"
  );

  const handleClose = () => setShowDefault(true);
  const nextPrevStep = (stepIndex) => setStep(stepper + stepIndex);

  useEffect(() => {
    //console.log(steps);
    if (stepper === steps.length) {
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
      setShowDefault(true);
      user.updateOne(formData, authState.user.id);
    }
  }, [stepper]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Go back to the previous stepper
    if (!!document.activeElement.id) {
      nextPrevStep(-1);
      return;
    }
    // Go to the next stepper
    nextPrevStep(1);

    // Get current form data
    const formData = new FormData(document.forms.register);
    let data = {};
    for (var key of formData.keys()) {
      data = { ...data, [key]: formData.get(key) };
    }

    const form = steps.filter((s, i) => i === stepper)[0].id;

    // append current form data to state
    setFormData((prev) => ({
      ...prev,
      [form]: { ...prev[form], ...data },
    }));
  };

  return (
    <>
      <div id="regForm">
        <Done handleClose={handleClose} showDefault={showDefault} />
        {stepper < steps.length ? (
          <>
            <div className="all-steps" id="all-steps">
              <Progress stepper={stepper} steps={steps} />
            </div>

            <div className="container">
              <Form onSubmit={handleSubmit} id="register" validated={false}>
                {steps.map(({ Component, title }, i) =>
                  i === stepper ? <Component key={i} title={title} /> : null
                )}

                <div className="nextprevious" id="nextprevious">
                  <div className="btn-nextprevious">
                    {stepper > 0 ? (
                      <button formNoValidate id="prevBtn">
                        <i className="material-icons">
                          <FontAwesomeIcon
                            color="white"
                            icon={faAngleDoubleLeft}
                          />
                        </i>
                      </button>
                    ) : null}
                    <button formNoValidate>
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
