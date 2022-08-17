import { FunctionComponent } from "react";
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";
import { RootStackParamList } from "./types";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ManageExpense from "./screens/ManageExpense";
import RecentExpenses from "./screens/RecentExpenses";
import AllExpenses from "./screens/AllExpenses";

const Stack = createNativeStackNavigator<RootStackParamList>();
const BottomTabs = createBottomTabNavigator<RootStackParamList>();

const ExpensesOverview = () => {
    return (
        <BottomTabs.Navigator>
            <BottomTabs.Screen
                name="RecentExpenses"
                component={RecentExpenses}
            />
            <BottomTabs.Screen
                name="AllExpenses"
                component={AllExpenses}
            />
        </BottomTabs.Navigator>
    );
};

const App: FunctionComponent = () => {
    return (
        <>
            <StatusBar style="auto" />
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="ExpensesOverview"
                        component={ExpensesOverview}
                    />
                    <Stack.Screen
                        name="ManageExpense"
                        component={ManageExpense}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
};

export default App;
