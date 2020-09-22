import { Company } from '../company/company';
import { Payment } from './payment';
import { Discount } from './discount';

export class Budget {
    id: number;
    numberBudget: number;
    creationDate: Date;
    expirationDays: number;
    company: Company;
    clientName: string;
    paymentCondition: number;
    payment: Payment; 
    discount: Discount;
    budgetDetails: Array<Object>;
}