import { createContext, useReducer } from "react"
import { v4 as uuidv4 } from 'uuid';

export const budgetReducer = (state, action) => {
    switch (action.type) {

        default:
            return state;
    }
}

//  Initial state
const initialState = {
    budget: 2000,
    expenses: [
        {
            id: 1,
            name: 'Rent',
            amount: 800
        },
        {
            id: 2,
            name: 'Food',
            amount: 600
        },
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
                expenses: state.expenses,
                dispatch,
            }}
        >
            {props.children}
        </BudgetContext.Provider>
    )
}