const filterReducer = (state = "", action) => {

  switch (action.type) {
    case "FILTER":
      return action.data;
    default:
      return state;
  }
};

// action

export const filterAction = (inputValue) => {
  return {
    type: "FILTER",
    data: inputValue,
  };
};

export default filterReducer;
