import React from 'react'
import { Button } from 'react-bootstrap'

const Budget = () => {
    return (
        <div className="col-md-4">
            <div className="alert alert-secondary">
                <span>Budget: </span>
                <Button variant="primary" size="sm" onClick={() => console.log("Danger")}>
                    Edit
                </Button>
            </div>
        </div>
    )
}

export default Budget
