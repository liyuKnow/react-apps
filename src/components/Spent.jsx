import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { BudgetContext } from "../Context/BudgetContext";

const Spent = () => {
    const { expenses } = useContext(BudgetContext);
    const totalExpenses = expenses.reduce((acc, curr) => acc + parseInt(curr.amount), 0);
    return (
        <div className="col-md-4">
            <div className="alert alert-info">
                <span>Spent: {totalExpenses} </span>
            </div>
        </div>
    )
}

export default Spent
