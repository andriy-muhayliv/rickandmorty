const data = "";

export default (state = data, action) => {
  switch (action.type) {
    case "SET_LOCAL_LIKE":
      const { image, like } = action;

      try {
        localStorage.setItem(image, JSON.stringify(like));
      } catch (err) {
        console.log(err);
      }
      return state;
    default:
      return state;
  }
};
