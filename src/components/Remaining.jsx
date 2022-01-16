import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { BudgetContext } from "../Context/BudgetContext";

const Remaining = () => {
    const { budget, remaining } = useContext(BudgetContext);

    const ratio = (remaining / budget);
    console.log(ratio)
    const alertType = getAlertType(ratio);

    return (
        <div className="col-md-4">
            <div className={`alert alert-${alertType}`}>
                <span>Remaining: ${remaining} </span>
            </div>
        </div>
    )
}

export default Remaining

function getAlertType(ratio) {
    if (ratio > 0.75) return 'success';
    if (ratio <= 0.75 && ratio > 0.5) return 'info'
    if (ratio <= 0.5 && ratio > 0.25) return 'warning'
    if (ratio <= 0.25) return 'danger'

}
