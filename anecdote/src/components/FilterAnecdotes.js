import React from "react";
import { filterAction } from "../reducers/filterReducer";
import { connect } from "react-redux";

const FilterAnecdotes = (props) => {
  return (
    <div style={{ marginBottom: 10 }}>
      <span>Filter </span>
      <input onChange={(e) => props.filterAction(e.target.value)} />
    </div>
  );
};

export default connect(null, { filterAction })(FilterAnecdotes);
