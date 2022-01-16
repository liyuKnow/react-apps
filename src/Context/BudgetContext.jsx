import { createContext, useReducer } from "react"
import { v4 as uuidv4 } from 'uuid';

export const budgetReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return {
                ...state,
                expenses: [...state.expenses, action.payload],
                remaining: state.remaining - action.payload.amount
            };
        case 'DELETE_EXPENSE':
            return {
                ...state,
                expenses: state.expenses.filter(expense => expense.id !== action.payload),
                remaining: state.remaining + parseFloat(state.expenses.find(expense => expense.id === action.payload).amount)
            };
        // case 'EDIT_EXPENSE':


        default:
            return state;
    }
}

//  Initial state
const initialState = {
    budget: 3000,
    remaining: 3000,
    expenses: [
    ],
};

// create and export context
export const BudgetContext = createContext()

// provider
export const BudgetProvider = (props) => {
    const [state, dispatch] = useReducer(budgetReducer, initialState)

    return (
        <BudgetContext.Provider
            value={{
                budget: state.budget,
                remaining: state.remaining,
                expenses: state.expenses,
                dispatch,
            }}
        >
            {props.children}
        </BudgetContext.Provider>
    )
}