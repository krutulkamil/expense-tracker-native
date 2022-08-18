import { FunctionComponent, createContext, ReactNode, useState } from "react";
import { ExpenseInterface } from "../types/expense";

export type ExpensesContextType = {}

export const ExpensesContext = createContext({} as ExpensesContextType);

interface ExpensesContextProviderProps {
    children: ReactNode
}

const ExpensesContextProvider: FunctionComponent<ExpensesContextProviderProps> = ({ children }) => {
    const [] = useState();

    const value = {};

    return (
        <ExpensesContext.Provider value={value}>
            {children}
        </ExpensesContext.Provider>
    )
}