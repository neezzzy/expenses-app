import { configureStore } from "@reduxjs/toolkit";
import expensesReducer from "../reducers/expensesReducer";
import filtersReducer from "../reducers/filters";

const store = configureStore({
  reducer: {
    expenses: expensesReducer,
    filters: filtersReducer
  }
});

export default store;
