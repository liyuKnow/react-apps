import { Button, Modal, Stack } from 'react-bootstrap'
import { useBudgets, UNCATEGORIZED_BUDGET_ID } from '../contexts/BudgetsContext';
import { currencyFormatter } from '../util';
const ViewExpenseModal = ({ budgetId, handleClose }) => {

    const { getBudgetExpenses, budgets, deleteBudget, deleteExpense, } = useBudgets();
    const expenses = getBudgetExpenses(budgetId);
    const budget = UNCATEGORIZED_BUDGET_ID === budgetId ? { name: "Uncategorized", id: UNCATEGORIZED_BUDGET_ID } : budgets.find(budget => budget.id === budgetId);

    return (
        <Modal show={budgetId != null} onHide={handleClose}>
            <Modal.Header closeButton>
                <Stack direction="horizontal" gap="2" >
                    <div>Expenses - {budget?.name} </div>
                    {budgetId !== UNCATEGORIZED_BUDGET_ID &&
                        <Button
                            variant="outline-danger"
                            onClick={() => {
                                deleteBudget(budget)
                                handleClose()
                            }}
                        >Delete Budget</Button>}
                </Stack>
            </Modal.Header>
            <Modal.Body>
                <Stack direction="vertical" gap="2" >
                    {expenses.map(expense => (
                        <Stack direction="horizontal" gap="2" key={expense.id}>
                            <div className="me-auto fs-4">{expense.description}</div>
                            <div className="fs-5">{currencyFormatter.format(expense.amount)}</div>
                            <Button className="sm"
                                variant="outline-danger"
                                onClick={() => {
                                    deleteExpense(expense)
                                    handleClose()
                                }}
                            >&times;</Button>
                        </Stack>
                    ))}
                </Stack>
            </Modal.Body>
        </Modal >
    )
}

export default ViewExpenseModal;
