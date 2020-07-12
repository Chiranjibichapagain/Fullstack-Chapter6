import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { voting } from "../reducers/anecdoteReducer";
import { notificationAction } from "../reducers/notificationReducer";

const AnecdoteList = () => {
  const anecdotes = useSelector((state) => state.anecdotes);
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
            <button
              onClick={() =>
                dispatch(
                  voting(anecdote.id),
                  dispatch(notificationAction(anecdote.content))
                )
              }
            >
              vote
            </button>
          </div>
        ))}
    </div>
  );
};

export default AnecdoteList;
