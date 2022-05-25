import React from "react";

const types = ["LOADING", "ERROR"];

const Reducer = (state, { payload, type }) => {
  const action = type.split("_")[0].toLowerCase();
  const success = !types.includes(type);

  if (success) {
    const new_state = {
      ...state,
      [action]: { ...payload },
      loading: false,
    };
    return new_state;
  }

  return {
    ...state,
    loading: type === "LOADING",
    error: type === "ERROR" ? payload : false,
  };
};

export default Reducer;
