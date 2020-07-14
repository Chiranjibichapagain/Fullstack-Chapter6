import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { voting } from "../reducers/anecdoteReducer";
import { notificationAction } from "../reducers/notificationReducer";

const AnecdoteList = () => {
  const dispatch = useDispatch();
  const anecdotes = useSelector((state) => {
    const anec = state.anecdotes;
    const inputValue = state.filter;
    if (inputValue === "" || undefined) {
      return anec;
    } else {
      return anec.filter((anecdote) =>
        anecdote.content.toLowerCase().includes(inputValue.toLowerCase())
      );
    }
  });

  const handleClick = (anecdote) => {
    dispatch(voting(anecdote));
    dispatch(notificationAction(anecdote, 5));
  };

  return (
    <div>
      {anecdotes
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

export default AnecdoteList;
