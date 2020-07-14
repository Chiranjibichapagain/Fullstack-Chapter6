import React, { useEffect } from "react";
import AnecdoteForm from "./components/AnecdoteForm";
import AnecdoteList from "./components/AnecdoteList";
import Notification from "./components/Notification";
import FilterAnecdotes from "./components/FilterAnecdotes";
import { useDispatch } from "react-redux";
import { initialize } from "./reducers/anecdoteReducer";
import anecdoteService from "./services/anecdotes";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    anecdoteService
      .getAll()
      .then((anecdotes) => dispatch(initialize(anecdotes)));
  }, [dispatch]);

  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <FilterAnecdotes />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  );
};

export default App;
