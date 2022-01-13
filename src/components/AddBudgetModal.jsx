import React, { useState, useRef } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { useBudgets } from '../contexts/BudgetsContext';

const AddBudgetModal = ({ show, handleClose }) => {
    const nameRef = useRef();
    const maxRef = useRef();
    const { addBudget } = useBudgets();
    const handleSubmit = (e) => {
        e.preventDefault();

        addBudget({
            name: nameRef.current.value,
            max: parseFloat(maxRef.current.value)
        })

        handleClose();
    }

    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Form>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Budget</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control ref={nameRef} type="text" placeholder="Enter name of budget" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="max">
                            <Form.Label>Maximum Spending</Form.Label>
                            <Form.Control ref={maxRef} type="number" placeholder="Enter the maximum amount" required min={0} step={0.01} />
                        </Form.Group>
                        <div className="d-flex justify-content-end">
                            <Button variant="secondary" onClick={handleClose}>Cancel</Button>
                            <Button className="btn btn-primary" type="submit" onClick={handleSubmit}>Add Budget</Button>
                        </div>
                    </Modal.Body>
                </Form>
            </Modal>
        </div>
    )
}

export default AddBudgetModal
