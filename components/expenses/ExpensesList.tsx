import { FunctionComponent } from "react";
import { FlatList, ListRenderItemInfo, StyleSheet, Text } from "react-native";
import { ExpenseInterface } from "../../types";

interface ExpensesListProps {
    expenses: ExpenseInterface[];
}

const renderExpenseItem = (itemData: ListRenderItemInfo<ExpenseInterface>) => {
    return (
        <Text>{itemData.item.description}</Text>
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