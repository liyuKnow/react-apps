import React from 'react'
import { Button } from 'react-bootstrap'

const Budget = () => {
    return (
        <div className="col-md-4">
            <div className="alert alert-secondary d-flex justify-content-between">
                <span>Budget: </span>
                <Button variant="outline-info" size="sm" onClick={() => console.log("Danger")}>
                    Edit
                </Button>
            </div>
        </div>
    )
}

export default Budget
