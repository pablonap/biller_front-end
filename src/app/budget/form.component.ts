import { Component, OnInit } from '@angular/core';
import { Budget } from './budget';
import { Company } from '../company/company';
import { Payment } from '../payment/payment';
import { Discount } from '../discount/discount';
import { PaymentCondition } from '../payment-condition/payment-condition';
import { BudgetDiscountLine } from '../budget-discount-line/budget-discount-line';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {
  public budget: Budget = new Budget();
  public company: Company = new Company();
  public payment: Payment = new Payment();
  public discount: Discount = new Discount();
  public titulo: string = 'Nuevo presupuesto';
  public paymentCondition: PaymentCondition = new PaymentCondition();
  public budgetDiscountLine: BudgetDiscountLine = new BudgetDiscountLine();

  constructor() {}

  ngOnInit(): void {
    this.budget.company = this.company;
    this.budget.payment = this.payment;
    this.budget.paymentCondition = this.paymentCondition;
    this.budget.budgetDiscountLines = new Array()
    this.budgetDiscountLine.discount = new Discount();
  }

  manageAction(actionType: string): void {
    if (actionType === "add") {
      this.addDiscount();
    } else if(actionType === "create") {
      this.create();
    }
  }

  public create(): void {
    console.log('>>>', this.budget);
  }

  addDiscount(): void {
    console.log('>>[form.component] ', this.budgetDiscountLine.discount.id)
    this.budget.budgetDiscountLines.push(this.budgetDiscountLine);

    console.log('>>[form.component] length: ', this.budget.budgetDiscountLines.length);
    console.log('>>[form.component] array: ', this.budget.budgetDiscountLines);

    this.budgetDiscountLine = new BudgetDiscountLine();
    this.budgetDiscountLine.discount = new Discount();
  }
}