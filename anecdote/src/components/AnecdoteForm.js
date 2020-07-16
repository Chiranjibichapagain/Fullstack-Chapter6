import React from "react";
import { connect } from "react-redux";
import { createNew } from "../reducers/anecdoteReducer";

const AnecdoteForm = (props) => {
  const addNew = async (event) => {
    event.preventDefault();
    const quote = event.target.quote.value;
    event.target.quote.value = "";
    props.createNew(quote);
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

export default connect(null, { createNew })(AnecdoteForm);
