import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { BudgetContext } from "../Context/BudgetContext";

const Budget = () => {
    const { budget, dispatch } = useContext(BudgetContext);
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
