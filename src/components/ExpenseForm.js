import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Button,
  Form,
  Col,
  Row,
  InputGroup,
  FormControl,
  Modal
} from "react-bootstrap";
import uuid from "react-uuid";

const ExpenseForm = (props) => {
  const [expense, setExpense] = useState({
    description: "",
    note: "",
    amount: "",
    error: "",
    id: ""
  });
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { value, name } = event.target;
    setExpense((prevState) => ({ ...prevState, [name]: value, id: uuid() }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_EXPENSE", payload: expense });
    setExpense({
      description: "",
      note: "",
      amount: "",
      error: "",
      id: ""
    });
    handleShow();
    console.log(expense);
  };

  return (
    <div className="container-fluid">
      {expense.error && <p>{expense.error}</p>}
      <div>
        <div>
          <form onSubmit={onSubmit} className="flex-column">
            <div>
              <div className="">
                <Form.Group className="form-outline pt-2 ">
                  <Row className="align-items-center">
                    <Col sm={6} md={6} lg={9}>
                      <Form.Control
                        className="mb-2"
                        id="inlineFormInput"
                        placeholder="Description"
                        name="description"
                        value={expense.description}
                        onChange={handleChange}
                      />
                    </Col>
                    <Col sm={6} md={6} lg={3}>
                      <InputGroup className="mb-2">
                        <InputGroup.Text>$</InputGroup.Text>
                        <FormControl
                          id="inlineFormInputGroup"
                          placeholder="amount"
                          name="amount"
                          value={expense.amount}
                          onChange={handleChange}
                          placeholder="Amount in $"
                        />
                      </InputGroup>
                    </Col>
                  </Row>
                </Form.Group>
              </div>
              <div className="form-outline pt-2 pb-3">
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Add a note for your expense"
                  name="note"
                  value={expense.note}
                  onChange={handleChange}
                ></Form.Control>
              </div>
            </div>
            <Button type="submit" className="p-2">
              Add Expense
            </Button>
          </form>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Congratulations!</Modal.Title>
        </Modal.Header>
        <Modal.Body>You have successfully added an expense!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ExpenseForm;
