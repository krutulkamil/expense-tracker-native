import { FunctionComponent, useLayoutEffect } from "react";
import { Text } from "react-native";
import { NavigationProp, ParamListBase, RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../types";

interface ManageExpenseProps {
    route: RouteProp<RootStackParamList, 'ManageExpense'>;
    navigation: NavigationProp<ParamListBase>;
}

const ManageExpense: FunctionComponent<ManageExpenseProps> = ({ route, navigation }) => {
    const editedExpenseId = route.params?.expenseId;
    const isEditing = !!editedExpenseId;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? "Edit Expense" : "Add Expense"
        });
    }, [isEditing, navigation]);

    return (
        <Text>Manage Expense Screen</Text>
    );
};

export default ManageExpense;