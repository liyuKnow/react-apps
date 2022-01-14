import React from 'react'
import { Button, Col, Form, Row, Stack } from 'react-bootstrap'

const AddExpenseForm = () => {
    return (
        <div>
            <Form >
                <Row className=" align-items-center">
                    <Col sm={3} md={4} className="my-1">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Enter description" />
                        </Form.Group>
                    </Col>
                    <Col sm={3} md={4} className="my-1">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="number" placeholder="Enter Amount" />
                        </Form.Group>
                    </Col>
                    <Col sm={3} md={4} className="my-1">
                        <Button variant="primary" type="submit"> Add </Button>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

export default AddExpenseForm
