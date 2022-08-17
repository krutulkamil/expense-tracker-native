import { FunctionComponent } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ExpenseInterface } from "../../types";

interface ExpensesSummaryProps {
    periodName: string;
    expenses: ExpenseInterface[]
}

const ExpensesSummary: FunctionComponent<ExpensesSummaryProps> = ({ periodName, expenses }) => {
    const expensesSum: number = expenses.reduce((sum, expense) => sum + expense.amount, 0);

    return (
        <View>
            <Text>{periodName}</Text>
            <Text>${expensesSum.toFixed(2)}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default ExpensesSummary;