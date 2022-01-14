import React from 'react'
import { Card, ProgressBar, Stack, Button } from 'react-bootstrap'
import { currencyFormatter } from '../util';


const BudgetCard = ({ name, amount, max, gray, onAddExpenseClick, hideButtons, onViewExpenseClick }) => {
    const bgClasses = [];
    if (amount > max) {
        bgClasses.push('bg-danger', 'bg-opacity-10');
    } else if (gray) {
        bgClasses.push('bg-light');
    }
    return (
        <Card >
            <Card.Body className={bgClasses.join(" ")}>
                <Card.Title className="d-flex justify-content-between align-items-baseline fw-normal mb-3">
                    <div className="me-2">{name}</div>
                    <div className="d-flex align-items-baseline">
                        {currencyFormatter.format(amount)} {max && (<>/ <span className="text-muted fs-6">{currencyFormatter.format(max)}</span > </>)}
                    </div>
                </Card.Title>
                {max && <ProgressBar
                    className="rounded-pill"
                    variant={getProgressBarVariant(amount, max)}
                    now={amount / max * 100}
                    label={`${amount} / ${max}`}
                />}
                {!hideButtons && (<Stack direction="horizontal" gap="2" className="mt-4">
                    <Button variant="outline-primary ms-auto" onClick={onAddExpenseClick}>Add Expense</Button>
                    <Button variant="outline-info" onClick={onViewExpenseClick}>View Budget</Button>
                </Stack>)}
            </Card.Body>
        </Card>
    )
}

export default BudgetCard

const getProgressBarVariant = (amount, max) => {
    const ratio = amount / max;
    // if (ratio < 0.25) return 'success'
    if (ratio < 0.5) return 'info'
    if (ratio < 0.75) return 'warning'
    return 'danger'
}

const getCardBgColor = (amount, max, gray) => {
    const classes = [];

    if (amount > max) {
        classes.push('bg-danger', 'opacity-10');
    } else if (gray) {
        classes.push('bg-info');
    }

    return classes.join(' ');
    // const ratio = amount / max;
    // if (ratio < 0.25) return 'bg-success'
    // if (ratio < 0.5) return 'bg-info'
    // if (ratio < 0.75) return 'bg-warning'
    // return 'bg-danger'
}