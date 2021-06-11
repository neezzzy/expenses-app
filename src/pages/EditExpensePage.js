import React from "react";
import ExpenseForm from "../components/ExpenseForm";
import { Card, Button, FormGroup, ListGroup } from "react-bootstrap";
import ExpenseList from '../components/ExpenseList';
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

const EditExpensePage = (props) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="container-fluid">
      <div className="">
        <h1>Edit Expense</h1>
        <ExpenseList />
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <ExpenseForm />
        </Modal>

      </div>
    </div>
  );
};

export default EditExpensePage;
