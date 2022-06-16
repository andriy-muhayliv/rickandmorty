const data = [];

export default (state = data, action) => {
  switch (action.type) {
    case "FILTER_DATA":
      const { data, value } = action;
      const search = data?.filter((item) => {
        const successSearch = item?.name
          .trim()
          .toLowerCase()
          .split(" ")
          .join("")
          .search(value);
        if (successSearch >= 0) {
          return item;
        } else if (!value.length) {
          return data.slice();
        }
      });
      return search;
    default:
      return state;
  }
};
