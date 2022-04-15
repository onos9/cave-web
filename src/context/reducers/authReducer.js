const auth = (state, { payload, type }) => {
  switch (type) {
    case "LOADING":
      return {
        ...state,
        error: false,
        loading: true,
      };

    case "SUCCESS":
      return {
        ...state,
        ...payload,
        loading: false,
      };

    case "ERROR":
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default auth;
