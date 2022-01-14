import React, { useState, useRef } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { useBudgets, UNCATEGORIZED_BUDGET_ID } from '../contexts/BudgetsContext';

const AddExpenseModal = ({ show, handleClose, defaultBudgetId, handleShowAddExpenseModal }) => {

    const descriptionRef = useRef();
    const amountRef = useRef();
    const budgetIdRef = useRef();

    const { addExpense, budgets } = useBudgets();
    const handleSubmit = (e) => {
        e.preventDefault();

        addExpense({
            description: descriptionRef.current.value,
            amount: parseFloat(amountRef.current.value),
            budgetId: budgetIdRef.current.value
        })

        handleClose();
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Form>
                <Modal.Header closeButton>
                    <Modal.Title>Add Expense</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control ref={descriptionRef} type="text" placeholder="Enter description of budget" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="amount">
                        <Form.Label>Amount</Form.Label>
                        <Form.Control ref={amountRef} type="number" placeholder="Enter the amount amount" required min={0} step={0.01} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="budgetId">
                        <Form.Label>Budget</Form.Label>
                        <Form.Select ref={budgetIdRef} defaultValue={defaultBudgetId}>
                            <option value={UNCATEGORIZED_BUDGET_ID}>Uncatagorized</option>
                            {budgets.map((budget) => (
                                <option key={budget.id} value={budget.id}>{budget.name}</option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                    <div className="d-flex justify-content-end">
                        <Button className="me-2" variant="secondary" onClick={handleClose}>Cancel</Button>
                        <Button className="btn btn-primary" type="submit" onClick={handleSubmit}>Add Budget</Button>
                    </div>
                </Modal.Body>
            </Form>
        </Modal>
    )
}

export default AddExpenseModal