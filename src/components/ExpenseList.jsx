import React, { useContext } from 'react'
import { ListGroup, Badge } from 'react-bootstrap'
import { TiDelete } from 'react-icons/ti';
import { BudgetContext } from "../Context/BudgetContext";

const ExpenseList = () => {
    const { expenses, dispatch } = useContext(BudgetContext);

    const handleExpenseDelete = (id) => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: id
        })
    }
    return (
        <ListGroup className="list-group"  >
            {expenses.map(expense => (
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                    key={expense.id}
                    style={{ backgroundColor: '#ccc' }}
                >
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">{expense.name}</div>
                        Cras justo odio
                    </div>
                    <div>
                        <Badge bg="info" pill>
                            {expense.amount}
                        </Badge>
                        <TiDelete
                            className="ml-3"
                            size='2rem'
                            onClick={() => handleExpenseDelete(expense.id)}
                        />
                    </div>
                </ListGroup.Item>
            ))}
        </ListGroup>
    )
}

export default ExpenseList
