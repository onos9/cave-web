import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNotesMedical,
  faUser,
  faGraduationCap,
  faBible,
  faUserShield,
  faHandshakeSlash,
} from "@fortawesome/free-solid-svg-icons";

const icons = [
  { Icon: faUser }, // Bio Data
  { Icon: faGraduationCap }, // Educational Icon
  { Icon: faBible }, // Spiritual Icon
  { Icon: faNotesMedical }, // Health Icon
  { Icon: faUserShield }, // Referee Icon
  { Icon: faHandshakeSlash },
];

export default ({ steps, stepper }) => {
  return (
    <>
      {steps.map(({ Icon }, index) => (
        <span
          key={index}
          className={index > stepper ? "stepper" : "stepper active"}
        >
          <FontAwesomeIcon color="white" icon={Icon?.Icon} />
        </span>
      ))}
    </>
  );
};
