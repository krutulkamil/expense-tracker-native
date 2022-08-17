export type RootStackParamList = {
    ManageExpense: undefined,
    RecentExpenses: undefined,
    AllExpenses: undefined,
    ExpensesOverview: undefined
}

export interface ExpenseInterface {
    date: Date;
    description: string;
    amount: number;
}