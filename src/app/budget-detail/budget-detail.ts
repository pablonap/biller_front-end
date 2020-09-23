import { ServiceBudget } from '../service-budget/service-budget';

export class BudgetDetail {
    id: number;
    amount: number;
    unitPrice: number;
    serviceDescription: string;
    serviceBudget: ServiceBudget;
    totalAmount: number;
}