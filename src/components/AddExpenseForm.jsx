import React, { useContext, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { Button, Col, Form, Row, Stack } from 'react-bootstrap'
import { BudgetContext } from "../Context/BudgetContext";

const AddExpenseForm = () => {
    const { budget, remaining, expenses, dispatch } = useContext(BudgetContext);
    const expenseNameRef = useRef(null);
    const expenseAmountRef = useRef(null);
    const formRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newExpense = {
            id: uuidv4(),
            name: expenseNameRef.current.value,
            amount: expenseAmountRef.current.value,
        }
        dispatch({
            type: 'ADD_EXPENSE',
            payload: newExpense
        });
        formRef.current.reset();
    }

    return (
        <div>
            <Form ref={formRef}>
                <Row className=" align-items-center">
                    <Col sm={3} md={4} className="my-1">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control ref={expenseNameRef} type="text" placeholder="Enter description" />
                        </Form.Group>
                    </Col>
                    <Col sm={3} md={4} className="my-1">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control ref={expenseAmountRef} type="number" placeholder="Enter Amount" />
                        </Form.Group>
                    </Col>
                    <Col sm={3} md={4} className="my-1">
                        <Button
                            variant="primary"
                            type="submit"
                            onClick={handleSubmit}
                        > Add </Button>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

export default AddExpenseForm
