import anecdoteService from "../services/anecdotes";

const anecdoteReducer = (state = [], action) => {
  switch (action.type) {
    case "NEW_ANECDOTE":
      return [...state, action.data];
    case "INIT":
      return action.data;
    case "VOTE":
      const id = action.data.id;
      const toVote = state.find((n) => n.id === id);
      const changedAnecdote = { ...toVote, votes: toVote.votes + 1 };
      return state.map((anecdote) =>
        anecdote.id !== id ? anecdote : changedAnecdote
      );

    default:
      return state;
  }
};

//actions...

export const initialize = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll();
    dispatch({ type: "INIT", data: anecdotes });
  };
};

export const createNew = (data) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteService.create(data);
    dispatch({
      type: "NEW_ANECDOTE",
      data: newAnecdote,
    });
  };
};

export const voting = (anecdote) => {
  return async (dispatch) => {
    const changedAnecdote = await anecdoteService.update(anecdote);
    dispatch({
      type: "VOTE",
      data: changedAnecdote,
    });
  };
};

export default anecdoteReducer;
