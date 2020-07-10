import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { createNew, voting } from "./reducers/anecdoteReducer";

const App = () => {
  const dispatch = useDispatch();
  const anecdotes = useSelector((state) => state);

  const addNew = (event) => {
    event.preventDefault();
    const quote = event.target.quote.value;
    event.target.quote.value = "";
    dispatch(createNew(quote));
  };
  console.log("state in app", anecdotes);
  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes
        .sort((a, b) => {
          console.log(a, ".....", b);
          return b.votes - a.votes;
        })
        .map((anecdote) => (
          <div key={anecdote.id}>
            <div>{anecdote.content}</div>
            <div>
              has {anecdote.votes}
              <button onClick={() => dispatch(voting(anecdote.id))}>
                vote
              </button>
            </div>
          </div>
        ))}
      <h2>create new</h2>
      <form onSubmit={addNew}>
        <div>
          <input name="quote" />
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default App;
