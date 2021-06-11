import React, { useState } from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { Modal, Button, ListGroup } from "react-bootstrap";
import ExpenseForm from "./ExpenseForm";

const ExpenseListItem = ({ id, description, amount, note }) => {
  const dispatch = useDispatch();

  const removeExpenseById = (id) => {
    dispatch({ type: "REMOVE_EXPENSE", payload: id });
  };

  const editExpenseById = (id) => {
    handleShow();
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <ListGroup className="pt-3">
        <div>
          <ListGroup.Item className="d-flex " border="primary">
            <h3 className="d-flex w-50">{description}</h3>
            <h5 className="d-flex w-50 justify-content-end">${amount}</h5>
          </ListGroup.Item>
          <ListGroup.Item>
            <h6>{note}</h6>
          </ListGroup.Item>
          <div className="d-flex pt-2 pb-2 justify-content-start">
            <Button
              variant="info"
              className="mt-2 pr-4 mr-2 text-center"
              onClick={() => {
                editExpenseById(id);
              }}
            >
              EDIT
            </Button>
            <Button
              className="mt-2 text-center"
              onClick={() => {
                removeExpenseById(id);
              }}
              variant="danger"
            >
              REMOVE
            </Button>
          </div>
        </div>
      </ListGroup>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit {description}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ExpenseForm />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default connect()(ExpenseListItem);
