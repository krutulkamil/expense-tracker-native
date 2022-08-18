import { FunctionComponent } from "react";
import { View, StyleSheet } from "react-native";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";
import { ExpenseInterface } from "../../types/expense";
import { GlobalStyles } from "../../constants/styles";

interface ExpensesOutputProps {
    expenses: ExpenseInterface[],
    expensesPeriod: string;
}

const DUMMY_EXPENSES: ExpenseInterface[] = [
    {
        id: 'e1',
        description: 'A pair of shoes',
        amount: 59.99,
        date: new Date("2022-08-17")
    },
    {
        id: 'e2',
        description: 'A pair of trousers',
        amount: 89.99,
        date: new Date("2022-08-11"),
    },
    {
        id: 'e3',
        description: 'Bananas',
        amount: 5.49,
        date: new Date("2022-06-09")
    },
    {
        id: 'e4',
        description: 'Book',
        amount: 14.49,
        date: new Date("2022-01-05")
    },
    {
        id: 'e5',
        description: 'Programming Course',
        amount: 145.99,
        date: new Date("2021-10-21")
    }
]

const ExpensesOutput: FunctionComponent<ExpensesOutputProps> = ({ expenses, expensesPeriod }) => {
    return (
        <View style={styles.container}>
            <ExpensesSummary
                periodName={expensesPeriod}
                expenses={DUMMY_EXPENSES}
            />
            <ExpensesList expenses={DUMMY_EXPENSES} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 24,
        paddingBottom: 0,
        backgroundColor: GlobalStyles.colors.primary700
    }
});

export default ExpensesOutput;