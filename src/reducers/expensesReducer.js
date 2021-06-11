import { createReducer } from "@reduxjs/toolkit";
//Expenses Reducer
const expenseReducerDefaultState = [
  {
    description: "Food",
    note: "Groceries",
    amount: "2.50",
    error: "",
    id: "444e5d3-8871-cfd5-f83e-2fc6be7a5eb"
  },
  {
    description: "Clothes",
    note: "Misc",
    amount: "200.50",
    error: "",
    id: "17f1284-141f-65c3-c08f-8dc1f4184822"
  },
  {
    description: "Furniture",
    note: "Misc",
    amount: "2002.50",
    error: "",
    id: "221beed-11d-c51-6560-4b8e051c4bf6"
  },
  {
    description: "House",
    note: "Life",
    amount: "2132302.50",
    error: "",
    id: "221beed-11d-c51-6560-4b8e051c4bf3"
  }
];

const expensesReducer = createReducer(expenseReducerDefaultState, (builder) => {
  builder
    .addCase("ADD_EXPENSE", (state, action) => {
      // "mutate" the array by calling push()
      state.push(action.payload);
    })
    .addCase("REMOVE_EXPENSE", (state, action) => {
      return state.filter(({ id }) => id !== action.payload);
    })
    .addCase("EDIT_EXPENSE", (state, action) => {
      return state.map((item) => {
        if (item.id === action.id) {
          console.log(item);
          console.log(action.updatedExpense);
          
          return {
            ...item,
            ...action.updatedExpense,
          };
        } else {
          return item;
        }
      });
    });
});

export default expensesReducer;
// const expensesReducer = (state = expenseReducerDefaultState, action) => {
//   switch (action.type) {
//     case "ADD_EXPENSE":
//       return [...state, action.payload];
//     case "REMOVE_EXPENSE":
//       console.log(action.payload);
//       return state.filter(({ id }) => id !== action.payload);

//     case "EDIT_EXPENSE":
//       return state.map((item) => {
//         if (item.id === action.payload) {
//           console.log(`${item.id} item  id`);
//           console.log(`${action.payload} action.payload`);
//           return {
//             ...item,
//             ...action.payload
//           };
//         } else {
//           return item;
//         }
//       });
//     default:
//       return state;
//   }
// };
