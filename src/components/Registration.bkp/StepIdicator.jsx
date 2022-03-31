import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faGraduationCap,
    faBible,
    faNotesMedical,
    faHandshakeSlash,
    faUser,
    faUserShield
} from "@fortawesome/free-solid-svg-icons"


const icons = [
    { Icon: faUser },           // Bio Data
    { Icon: faGraduationCap },  // Educational Icon
    { Icon: faBible },          // Spiritual Icon
    { Icon: faNotesMedical },   // Health Icon
    { Icon: faUserShield },    // Referee Icon
    { Icon: faHandshakeSlash },
]

const StepIdicator = () => {
    return (
        <>
            { icons.map(({ Icon }, index) => (
                 <span key={ index } className="step">
                    <FontAwesomeIcon color='white' icon={ Icon } />
                </span>
            )) }
        </>
    )
}

export default StepIdicator
