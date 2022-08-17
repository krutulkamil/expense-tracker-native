import { FunctionComponent } from "react";
import { FlatList, ListRenderItemInfo, StyleSheet } from "react-native";
import ExpenseItem from "./ExpenseItem";
import { ExpenseInterface } from "../../types";

interface ExpensesListProps {
    expenses: ExpenseInterface[];
}

const renderExpenseItem = (itemData: ListRenderItemInfo<ExpenseInterface>) => {
    return (
        <ExpenseItem {...itemData.item} />
    );
}

const ExpensesList: FunctionComponent<ExpensesListProps> = ({expenses}) => {
    return (
        <FlatList
            data={expenses}
            renderItem={renderExpenseItem}
            keyExtractor={(item: ExpenseInterface) => item.id}
        />
    );
};

const styles = StyleSheet.create({});

export default ExpensesList;