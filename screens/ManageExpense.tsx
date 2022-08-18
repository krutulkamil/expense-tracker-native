import { FunctionComponent, useLayoutEffect } from "react";
import { View, StyleSheet } from "react-native";
import { NavigationProp, ParamListBase, RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../types/navigation";
import IconButton from "../components/UI/IconButton";
import Button from "../components/UI/Button";
import { GlobalStyles } from "../constants/styles";

interface ManageExpenseProps {
    route: RouteProp<RootStackParamList, 'ManageExpense'>;
    navigation: NavigationProp<ParamListBase>;
}

const ManageExpense: FunctionComponent<ManageExpenseProps> = ({ route, navigation }) => {
    const editedExpenseId = route.params?.expenseId;
    const isEditing = !!editedExpenseId;

    const deleteExpenseHandler = () => {};

    const cancelHandler = () => {};

    const confirmHandler = () => {};

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? "Edit Expense" : "Add Expense"
        });
    }, [isEditing, navigation]);

    return (
        <View style={styles.container}>
            <View style={styles.buttons}>
                <Button
                    mode="flat"
                    onPress={cancelHandler}
                    style={styles.button}
                >
                    Cancel
                </Button>
                <Button
                    onPress={confirmHandler}
                    style={styles.button}
                >
                    {isEditing ? "Update" : "Add"}
                </Button>
            </View>
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
    buttons: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        minWidth: 120,
        marginHorizontal: 8
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