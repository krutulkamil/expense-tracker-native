import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import RecentExpenses from "../../screens/RecentExpenses";
import AllExpenses from "../../screens/AllExpenses";
import { GlobalStyles } from "../../constants/styles";
import { RootStackParamList } from "../../types";

const BottomTabs = createBottomTabNavigator<RootStackParamList>();

const ExpensesOverview = () => {
    return (
        <BottomTabs.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
                headerTintColor: "white",
                tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
                tabBarActiveTintColor: GlobalStyles.colors.accent500
            }}
        >
            <BottomTabs.Screen
                name="RecentExpenses"
                component={RecentExpenses}
                options={{
                    title: "Recent Expenses",
                    tabBarLabel: "Recent",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="hourglass" size={size} color={color}/>
                    )
                }}
            />
            <BottomTabs.Screen
                name="AllExpenses"
                component={AllExpenses}
                options={{
                    title: "All Expenses",
                    tabBarLabel: "All Expenses",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="calendar" size={size} color={color}/>
                    )
                }}
            />
        </BottomTabs.Navigator>
    );
};

export default ExpensesOverview;