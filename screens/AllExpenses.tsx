import { FunctionComponent } from "react";
import ExpensesOutput from "../components/expenses/ExpensesOutput";

const AllExpenses: FunctionComponent = () => {
    return (
        <ExpensesOutput expensesPeriod="Total" />
    );
};

export default AllExpenses;