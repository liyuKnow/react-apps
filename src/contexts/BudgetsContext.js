import React, { useContext, useState } from "react";
import { v4 as uuidV4 } from "uuid";
import useLocalStorageHook from "../hooks/UseLocalStorageHook";
const BudgetsContext = React.createContext();

export function useBudgets() {
    return useContext(BudgetsContext);
}


export const BudgetsContextProvider = ({ children }) => {
    const [budgets, setBudgets] = useLocalStorageHook("budgets", []);
    const [expenses, setExpenses] = useLocalStorageHook("expenses", []);

    function getBudgetExpenses(budgetId) {
        return expenses.filter(expense => expense.budgetId === budgetId);
    }
    function addBudget({ name, max }) {
        setBudgets(prevBudgets => {
            if (prevBudgets.find(budget => budget.name === name)) {
                return prevBudgets;
            }
            return [...prevBudgets, { id: uuidV4(), name, max }]
        });
    }
    function addExpenses({ description, amount, budgetId }) {
        setExpenses(prevExpenses => {
            return [...prevExpenses, { id: uuidV4(), description, amount, budgetId }]
        });
    }
    function deleteBudget({ id }) {
        setBudgets(prevBudgets => {
            return prevBudgets.filter(budget => budget.id !== id);
        });
    }

    function deleteExpenses({ id }) {
        setExpenses(prevExpenses => {
            return prevExpenses.filter(expense => expense.id !== id);
        });
    }

    return (
        <BudgetsContext.Provider
            value={{
                budgets,
                expenses,
                getBudgetExpenses,
                addBudget,
                addExpenses,
                deleteBudget,
                addExpenses,
                deleteExpenses,
            }}
        >
            {children}
        </BudgetsContext.Provider>
    );
}