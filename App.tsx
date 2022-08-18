import { FunctionComponent } from "react";
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";
import { RootStackParamList } from "./types";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ManageExpense from "./screens/ManageExpense";
import ExpensesOverview from "./components/navigation/ExpensesOverview";
import { GlobalStyles } from "./constants/styles";

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: FunctionComponent = () => {
    return (
        <>
            <StatusBar style="auto" />
            <NavigationContainer>
                <Stack.Navigator screenOptions={{
                    headerStyle: {
                        backgroundColor: GlobalStyles.colors.primary500,
                    },
                    headerTintColor: "white"
                }}>
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
                        options={{
                            presentation: 'modal'
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
};

export default App;
