export type RootStackParamList = {
    ManageExpense: { expenseId: string },
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