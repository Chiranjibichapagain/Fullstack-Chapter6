import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { voting } from "../reducers/anecdoteReducer";
import {
  notificationAction,
  removeNotificationAction,
} from "../reducers/notificationReducer";
import anecdoteService from "../services/anecdotes";

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

  // const handleVote = async (anecdote) => {
  //   const dispatch = useDispatch();

  //   console.log(anecdote);
  //   await anecdoteService.update(anecdote);
  //   dispatch(
  //     voting(anecdote.id),
  //     dispatch(notificationAction(anecdote.content)),
  //     setTimeout(() => {
  //       dispatch(removeNotificationAction());
  //     }, 5000)
  //   );
  // };

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
              onClick={async () =>
                await anecdoteService.update(anecdote).then((response) =>
                  dispatch(
                    voting(response),
                    dispatch(notificationAction(response.content)),
                    setTimeout(() => {
                      dispatch(removeNotificationAction());
                    }, 5000)
                  )
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
