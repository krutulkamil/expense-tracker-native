import { FunctionComponent } from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";
import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";
import { ExpenseInterface } from "../../types"
import { GlobalStyles } from "../../constants/styles";
import { getFormattedDate } from "../../util/date";

interface ExpenseItemProps {
    description: ExpenseInterface['description'];
    amount: ExpenseInterface['amount'];
    date: ExpenseInterface['date'];
}

const ExpenseItem: FunctionComponent<ExpenseItemProps> = ({ description, amount, date }) => {
    const navigation = useNavigation<NavigationProp<ParamListBase>>();

    const expensePressHandler = () => {
        navigation.navigate('ManageExpense', {})
    };

    return (
        <Pressable
            onPress={expensePressHandler}
            style={({ pressed }) => pressed && styles.pressed}
        >
            <View style={styles.expenseItem}>
                <View>
                    <Text style={[styles.textBase, styles.description]}>{description}</Text>
                    <Text style={[styles.textBase]}>{getFormattedDate(date)}</Text>
                </View>
                <View style={styles.amountContainer}>
                    <Text style={styles.amount}>{amount.toFixed(2)}</Text>
                </View>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.75
    },
    expenseItem: {
        padding: 12,
        marginVertical: 8,
        backgroundColor: GlobalStyles.colors.primary500,
        flexDirection: "row",
        justifyContent: "space-between",
        borderRadius: 6,
        elevation: 3,
        shadowColor: GlobalStyles.colors.gray500,
        shadowRadius: 4,
        shadowOffset: {
            width: 1, height: 1
        },
        shadowOpacity: 0.4
    },
    textBase: {
        color: GlobalStyles.colors.primary50
    },
    description: {
        fontSize: 16,
        marginBottom: 4,
        fontWeight: "bold"
    },
    amountContainer: {
        paddingHorizontal: 12,
        paddingVertical: 4,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4,
        minWidth: 80
    },
    amount: {
        color: GlobalStyles.colors.primary500,
        fontWeight: "bold"
    }
})

export default ExpenseItem;