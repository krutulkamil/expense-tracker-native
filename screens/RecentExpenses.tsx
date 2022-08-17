import { FunctionComponent } from "react";
import ExpensesOutput from "../components/expenses/ExpensesOutput";

const RecentExpenses: FunctionComponent = () => {
    return (
        <ExpensesOutput expensesPeriod="Last 7 Days" />
    );
};

export default RecentExpenses;