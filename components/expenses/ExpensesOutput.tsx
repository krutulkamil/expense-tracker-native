import { FunctionComponent } from "react";
import { View, StyleSheet } from "react-native";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";
import { ExpenseInterface } from "../../types";

interface ExpensesOutputProps {
    expenses: ExpenseInterface[],
    expensesPeriod: string;
}

const ExpensesOutput: FunctionComponent<ExpensesOutputProps> = ({ expenses, expensesPeriod }) => {
    return (
        <View>
            <ExpensesSummary
                periodName={expensesPeriod}
                expenses={expenses}
            />
            <ExpensesList />
        </View>
    );
};

const styles = StyleSheet.create({});

export default ExpensesOutput;