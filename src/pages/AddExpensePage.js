import React from "react";
import ExpenseForm from "../components/ExpenseForm";
import {
  Button,
  Form,
  Col,
  Row,
  InputGroup,
  FormControl,
  Modal
} from "react-bootstrap";

const AddExpensePage = () => {
  return (
    <div className="container">
      <ExpenseForm />
    </div>
  );
};

export default AddExpensePage;
