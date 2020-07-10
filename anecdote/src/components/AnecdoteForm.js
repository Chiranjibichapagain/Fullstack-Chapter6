import React from "react";
import { useDispatch } from "react-redux";
import { createNew } from "../reducers/anecdoteReducer";

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const addNew = (event) => {
    event.preventDefault();
    const quote = event.target.quote.value;
    event.target.quote.value = "";
    dispatch(createNew(quote));
  };

  return (
    <div>
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

export default AnecdoteForm;
