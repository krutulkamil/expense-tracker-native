import { FunctionComponent } from "react";
import { StyleSheet, Text, View } from "react-native";

const ExpensesSummary: FunctionComponent = () => {
    return (
        <View>
            <Text>PERIOD</Text>
            <Text>$SUM OF EXPENSES</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default ExpensesSummary;