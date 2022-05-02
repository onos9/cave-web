import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default ({ steps, stepper }) => {
  return (
    <>
      {steps.map(({ Icon }, index) => (
        <span
          key={index}
          className={index > stepper ? "stepper" : "stepper active"}
        >
          <FontAwesomeIcon color="white" icon={Icon} />
        </span>
      ))}
    </>
  );
};
