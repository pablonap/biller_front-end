import { Discount } from '../discount/discount';

export class BudgetDiscountLine {
    id: number;
    discount: Discount;
    amountWithDiscount: number;
}