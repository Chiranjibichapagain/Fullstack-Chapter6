import { initialState } from "./anecdoteReducer";

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FILTER":
      const filterInput = action.data.toLowerCase();
      const filteredAnecdotes= state.filter(anecdote=>anecdote.content.toLowerCase().includes(filterInput))
      return (state = filteredAnecdotes);
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
