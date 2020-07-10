import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { voting } from "../reducers/anecdoteReducer";

const AnecdoteList = () => {
  const anecdotes = useSelector((state) => state);
  const dispatch = useDispatch();

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
            <button onClick={() => dispatch(voting(anecdote.id))}>vote</button>
          </div>
        ))}
    </div>
  );
};

export default AnecdoteList;
