import { FunctionComponent, useLayoutEffect } from "react";
import { View, StyleSheet } from "react-native";
import { NavigationProp, ParamListBase, RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../types";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/styles";

interface ManageExpenseProps {
    route: RouteProp<RootStackParamList, 'ManageExpense'>;
    navigation: NavigationProp<ParamListBase>;
}

const ManageExpense: FunctionComponent<ManageExpenseProps> = ({ route, navigation }) => {
    const editedExpenseId = route.params?.expenseId;
    const isEditing = !!editedExpenseId;

    const deleteExpenseHandler = () => {};

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? "Edit Expense" : "Add Expense"
        });
    }, [isEditing, navigation]);

    return (
        <View style={styles.container}>
            {isEditing && (
                <View style={styles.deleteContainer}>
                    <IconButton
                        icon="trash"
                        color={GlobalStyles.colors.error500}
                        size={36}
                        onPress={deleteExpenseHandler}
                    />
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary800
    },
    deleteContainer: {
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: GlobalStyles.colors.primary200,
        alignItems: "center"
    }
});

export default ManageExpense;