import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faBible,
  faGraduationCap,
  faHandshakeSlash,
  faNotesMedical,
  faUser,
  faUserShield,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Alert, Form } from "@themesberg/react-bootstrap";
import React, { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import useAuth from "../../hooks/useAuth";
import useMailer from "../../hooks/useMailer";
import useUser from "../../hooks/useUser";
import Background from "../Registration/Background";
import BioData from "../Registration/BioData";
import Health from "../Registration/Health";
import Referee from "../Registration/Referee";
import Terms from "../Registration/Terms";
import Qualification from "./../Registration/Qualification";
import Done from "./Done";
import Progress from "./Progress";
import "./wizard.css";

const initSteps = [
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

let mail = {
  fromAddress: "support@adullam.ng",
  toAddress: "onosbrown.saved@gmail.com",
  subject: "Adullam Enrollment",
  content: {
    filename: "enroll.html",
    refereeName: "",
    name: "Reference Form",
    download_link: `${process.env.REACT_APP_SERVER_URI}/#/downloads/ref_form.docx`,
    upload_link: `${process.env.REACT_APP_SERVER_URI}/#/downloads/upload`,
  },
};

const Wizard = () => {
  const [qualification, setQualification] = useState([]);
  const [fullName, setFullName] = useState();
  const [formValues, setFormValues] = useState({});
  const [showDefault, setShowDefault] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [stepper, setStepper] = useState(0);
  const [steps, setSteps] = useState(initSteps);
  const { user } = useUser();
  const { auth, authState } = useAuth();
  const { mailer, mailState } = useMailer();

  const [online, setOnline] = useState(
    authState?.user?.programOption === "Online"
  );

  const handleClose = () => setShowDefault(true);
  const nextPrevStep = (stepIndex) => setStepper(stepper + stepIndex);

  useEffect(() => {
    if (online) {
      const arr = initSteps.filter(({ id }) => id !== "health");
      setSteps(arr);
    }
  }, [stepper]);

  const handleAdd = (d) => {
    setQualification((prev) => [...prev, d]);
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Go back to the previous stepper
    if (!!document.activeElement.id) {
      nextPrevStep(-1);
      return;
    }

    const formData = new FormData(document.forms.register);
    let data = {};
    for (var key of formData.keys()) {
      data = { ...data, [key]: formData.get(key) };
    }

    const form = steps.filter((s, i) => i === stepper)[0].id;
    setFormValues((prev) => ({
      ...prev,
      [form]: { ...prev[form], ...data },
    }));

    if (!fullName && data?.bioData?.firstName)
      setFullName(`${data?.bioData?.firstName} ${data?.bioData?.lastName}`);

    if (form === "referees") {
      data = [
        {
          fullName: data?.firstRefereeName,
          email: data?.firstRefereeEmail,
          phone: data?.firstRefereePhone,
        },
        {
          fullName: data?.secondRefereeName,
          email: data?.secondRefereeEmail,
          phone: data?.secondRefereePhone,
        },
      ];
      mail.subject = "Adullam Reference Form";
      mail.content.filename = "referee.html";
      mail.content.name = fullName;
      data.forEach(function (item, index) {
        mail.toAddress = item.email;
        mail.content.refereeName = item.fullName;
        mailer.sendMail(mail);
      });
    }

    data = { [form]: data };
    user.updateOne(data, authState?.user?.id);

    if (stepper == steps.length - 1) {
      mail = {
        fromAddress: "support@adullam.ng",
        toAddress: authState?.user?.email,
        subject: "Adullam Enrollment",
        content: {
          filename: "enroll.html",
        },
      };
      mailer.sendMail(mail);
      setShowDefault(true);
    }
    nextPrevStep(1);
  };

  return (
    <>
      <div id="regForm">
        {" "}
        <CSSTransition
          in={showMessage}
          timeout={300}
          classNames="alert"
          unmountOnExit
        >
          <Alert variant="success" onClose={() => setShowMessage(false)}>
            <Alert.Heading>Credential Added Successfully</Alert.Heading>
            <p>Fill the form again to add more credentials if any</p>
          </Alert>
        </CSSTransition>
        <Done handleClose={handleClose} showDefault={showDefault} />
        {stepper < steps.length ? (
          <>
            <div className="all-steps" id="all-steps">
              <Progress stepper={stepper} steps={steps} />
            </div>

            <div className="container">
              <Form onSubmit={handleSubmit} id="register" validated={false}>
                {steps.map(({ Component, title }, i) =>
                  i === stepper ? (
                    <Component
                      handleAdd={handleAdd}
                      key={i}
                      title={title}
                      values={formValues}
                    />
                  ) : null
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
                    <button>
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
