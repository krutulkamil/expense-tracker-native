export type RootStackParamList = {
    ManageExpense: undefined,
    RecentExpenses: undefined,
    AllExpenses: undefined,
    ExpensesOverview: undefined
}

export interface ExpenseInterface {
    id: string;
    description: string;
    amount: number;
    date: Date;
}