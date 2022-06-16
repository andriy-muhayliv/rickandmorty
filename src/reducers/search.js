const data = [];

export default (state = data, action) => {
  switch (action.type) {
    case "SEARCH":
      return { ...state };
    default:
      return state;
  }
};
