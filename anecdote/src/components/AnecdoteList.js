import React from "react";
import { connect } from "react-redux";
import { voting } from "../reducers/anecdoteReducer";
import { notificationAction } from "../reducers/notificationReducer";

const AnecdoteList = (props) => {
  const handleClick = (anecdote) => {
    props.voting(anecdote);
    props.notificationAction(anecdote, 5);
  };

  return (
    <div>
      {props.anecdotes
        .sort((a, b) => {
          return b.votes - a.votes;
        })
        .map((anecdote) => (
          <div key={anecdote.id}>
            <div>{anecdote.content}</div>
            has {anecdote.votes}
            <button onClick={() => handleClick(anecdote)}>vote</button>
          </div>
        ))}
    </div>
  );
};
const mapStateToProps = (state) => {
  const anecdotes = state.anecdotes;
  const inputValue = state.filter;
  if (inputValue === "" || inputValue === undefined) {
    return { anecdotes: anecdotes, filter: inputValue };
  } else {
    const filteredAnecdotes = anecdotes.filter((anecdote) =>
      anecdote.content.toLowerCase().includes(inputValue.toLowerCase())
    );
    return {
      anecdotes: filteredAnecdotes,
      filter: inputValue,
    };
  }
};

const mapDispatchToProps = {
  voting,
  notificationAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteList);
