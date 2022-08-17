import { FunctionComponent } from "react";
import { View, StyleSheet } from "react-native";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

interface ExpensesOutputProps {
    expenses: number[],
}

const ExpensesOutput: FunctionComponent<ExpensesOutputProps> = ({ expenses }) => {
    return (
        <View>
            <ExpensesSummary />
            <ExpensesList />
        </View>
    );
};

const styles = StyleSheet.create({});

export default ExpensesOutput;