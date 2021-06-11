import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setTextFilter, sortByDate, sortByAmount } from "../actions/filters";
import { Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ExpenseListFilters = (props) => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="container-fluid">
      <h1>Expenses:</h1>
      <div className="row">
        <div className="col">
          <div className="form-outline">
            <label className="form-label" htmlFor="form8Example1">
              Search by Name:
            </label>
            <Form.Control
              type="text"
              className="form-control"
              placeholder="type name here"
              onChange={(e) => {
                props.dispatch(setTextFilter(e.target.value));
              }}
              value={props.filters.text}
            />
          </div>
        </div>

        <div className="col">
          <div className="form-outline">
            <label className="form-label" htmlFor="form8Example1">
              Date:
            </label>
            <br />
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
        </div>

        <div className="col">
          <div className="form-outline">
            <label className="form-label" htmlFor="form8Example1">
              Sort By:
            </label>
            <br />
            <select
              value={props.filters.sortBy}
              onChange={(e) => {
                if (e.target.value === "date") {
                  props.dispatch(sortByDate());
                } else if (e.target.value === "amount") {
                  props.dispatch(sortByAmount());
                }
              }}
            >
              <option value="date">Date</option>
              <option value="amount">Amount</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  };
};

ExpenseListFilters.propTypes = {
  dispatch: PropTypes.any,
  filters: PropTypes.any,
};
export default connect(mapStateToProps)(ExpenseListFilters);
