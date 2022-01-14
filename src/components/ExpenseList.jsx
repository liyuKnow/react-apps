import React from 'react'
import { ListGroup, Badge } from 'react-bootstrap'
import { TiDelete } from 'react-icons/ti';

const ExpenseList = () => {
    const expensesHard = [
        { id: 100, description: 'Rent', amount: 1000 },
        { id: 101, description: 'Coffee', amount: 300 },
        { id: 102, description: 'Gas Money', amount: 900 },
        { id: 103, description: 'Food', amount: 800 },
    ]
    return (
        <ListGroup className="list-group"  >
            {expensesHard.map(expense => (
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                    key={expense.id}
                    style={{ backgroundColor: '#ccc' }}
                >
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">{expense.description}</div>
                        Cras justo odio
                    </div>
                    <div>
                        <Badge bg="info" pill>
                            {expense.amount}
                        </Badge>
                        <TiDelete className="ml-3" size='2rem' />
                    </div>
                </ListGroup.Item>
            ))}
        </ListGroup>
    )
}

export default ExpenseList
