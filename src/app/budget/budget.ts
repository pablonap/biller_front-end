import { Company } from '../company/company';
import { Payment } from '../payment/payment';
import { Discount } from '../discount/discount';
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
    discount: Discount;
    budgetDetails: Array<Object>;
}