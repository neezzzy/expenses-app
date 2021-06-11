import React from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import ExpenseListItem from "../components/ExpenseListItem";
import selectExpenses from "../selectors/expenses";

const ExpenseList = (props) => (
  <div className="m-0 p-0">
    {props.expenses.map((expense) => (
      <ExpenseListItem key={expense.id} {...expense} />
    ))}
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};
ExpenseList.propTypes = {
  expenses: PropTypes.array,
};
export default connect(mapStateToProps)(ExpenseList);
