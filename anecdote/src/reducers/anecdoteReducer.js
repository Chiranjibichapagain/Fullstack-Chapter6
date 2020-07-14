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

export const initialize = (anecdotes) => {
  return {
    type: "INIT",
    data: anecdotes,
  };
};

export const createNew = (data) => {
  return {
    type: "NEW_ANECDOTE",
    data
  };
};

export const voting = (id) => {
  return {
    type: "VOTE",
    data: { id: id },
  };
};

export default anecdoteReducer;
