import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faNotesMedical,
    faUser,
    faGraduationCap,
    faBible,
    faUserShield,
    faHandshakeSlash,
} from "@fortawesome/free-solid-svg-icons"


const icons = [
    { Icon: faUser },           // Bio Data
    { Icon: faGraduationCap },  // Educational Icon
    { Icon: faBible },          // Spiritual Icon
    { Icon: faNotesMedical },   // Health Icon
    { Icon: faUserShield },    // Referee Icon
    { Icon: faHandshakeSlash },
]

export default ({ step }) => {
  return (
    <>
      {icons.map(({ Icon }, index) => (
        <span key={index} className={index > step ? "step" : "step active"}>
          <FontAwesomeIcon color="white" icon={Icon} />
        </span>
      ))}
    </>
  );
};
