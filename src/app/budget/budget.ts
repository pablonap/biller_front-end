import { Company } from '../company/company';
import { Payment } from '../payment/payment';
import { BudgetDiscountLine } from '../budget-discount-line/budget-discount-line';
import { BudgetDetail } from '../budget-detail/budget-detail';
import { PaymentCondition } from '../payment-condition/payment-condition';

export class Budget {
    id: number;
    numberBudget: number;
    creationDate: Date;
    expirationDays: number;
    company: Company;
    clientName: string;
    paymentCondition: PaymentCondition;
    payment: Payment; 
    budgetDiscountLines: Array<BudgetDiscountLine>
    budgetDetails: Array<BudgetDetail>;
    totalAmount: number;
}