import React from "react";
import PropTypes from "prop-types";
import { Form, Col, Row, InputGroup, FormControl } from "react-bootstrap";

const EditExpenseForm = (props) => {
  return (
    <div className="container-fluid">
      <div>
        <div>
          <form className="flex-column">
            <div>
              <div className="">
                <Form.Group className="form-outline pt-2 ">
                  <Row className="align-items-center">
                    <Col lg={6}>
                      <Form.Control
                        required
                        className="mb-2"
                        id="inlineFormInput"
                        placeholder={props.description}
                        name="description"
                        onChange={(e) => props.handleChange(e)}
                      />
                    </Col>
                    <Col lg={6}>
                      <InputGroup className="mb-2">
                        <InputGroup.Text>$</InputGroup.Text>
                        <FormControl
                          required
                          id="inlineFormInputGroup"
                          placeholder={props.amount}
                          name="amount"
                          onChange={(e) => props.handleChange(e)}
                        />
                      </InputGroup>
                    </Col>
                  </Row>
                  <Form.Control
                    required
                    as="textarea"
                    rows={3}
                    placeholder={props.note}
                    name="note"
                    onChange={(e) => props.handleChange(e)}
                  ></Form.Control>
                </Form.Group>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

EditExpenseForm.propTypes = {
  description: PropTypes.string,
  note: PropTypes.string,
  id: PropTypes.string,
  amount: PropTypes.string,
  handleChange: PropTypes.func,
};
export default EditExpenseForm;
