const data = {};

export default (state = data, action) => {
  switch (action.type) {
    case "PERSON":
      return action.item;
    default:
      return state;
  }
};
