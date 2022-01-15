import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { BudgetProvider } from "../Context/BudgetContext";

const Budget = () => {
    const { budget, dispatch } = useContext(BudgetProvider);
    return (
        <div className="col-md-4">
            <div className="alert alert-secondary d-flex justify-content-between">
                <span>Budget: ${budget} </span>
                <Button variant="outline-info" size="sm" onClick={() => console.log("Danger")}>
                    Edit
                </Button>
            </div>
        </div>
    )
}

export default Budget
