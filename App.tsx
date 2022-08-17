import { FunctionComponent } from "react";
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";
import { RootStackParamList } from "./types";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ManageExpense from "./screens/ManageExpense";
import ExpensesOverview from "./components/navigation/ExpensesOverview";

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: FunctionComponent = () => {
    return (
        <>
            <StatusBar style="auto" />
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="ExpensesOverview"
                        component={ExpensesOverview}
                        options={{
                            headerShown: false
                        }}
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
