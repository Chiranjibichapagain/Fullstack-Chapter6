import React from "react";
import { filterAction } from "../reducers/filterReducer";
import { useDispatch } from "react-redux";

const FilterAnecdotes = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <span>Filter </span>
      <input onChange={(e) => dispatch(filterAction(e.target.value))} />
    </div>
  );
};

export default FilterAnecdotes;
