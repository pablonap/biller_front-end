import { Component, OnInit } from '@angular/core';
import { Budget } from './budget';
import { Company } from '../company/company';
import { Payment } from '../payment/payment';
import { Discount } from '../discount/discount';
import { PaymentCondition } from '../payment-condition/payment-condition';
import { BudgetDiscountLine } from '../budget-discount-line/budget-discount-line';
import { DiscountService } from '../discount/discount.service';
import { BudgetDetail } from '../budget-detail/budget-detail';
import { ServiceBudget } from '../service-budget/service-budget';

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
  public budgetDetail: BudgetDetail = new BudgetDetail();
  public selectedDiscounts: string = "";

  discounts: Discount[];

  constructor(
    private discountService: DiscountService
  ) {}

  ngOnInit(): void {
    this.budget.company = this.company;
    this.budget.payment = this.payment;
    this.budget.paymentCondition = this.paymentCondition;

    this.budget.budgetDiscountLines = new Array()
    this.budget.budgetDetails = new Array()

    this.budgetDiscountLine.discount = new Discount();
    this.budgetDetail.serviceBudget = new ServiceBudget();

    this.discountService.getDiscounts().subscribe((discounts) => (this.discounts = discounts));
  }

  manageAction(actionType: string): void {
    if (actionType === "add") {
      this.addDiscount();
    } else if(actionType === "create") {
      this.create();
    } else if(actionType === "remove") {
      this.remove();
    } else if(actionType === "addServiceBudget") {
      this.addServiceBudget();
    } else if(actionType === "removeServiceBudgets") {
      this.removeServiceBudgets();
    }
  }

  public create(): void {
    console.log('>>>', this.budget);
  }

  public getValueByIdDiscount(id: number): number {
    let valueDiscount = this.discounts[id].value;
    return valueDiscount;
  }

  public remove(): void {
    this.budget.budgetDiscountLines = [];
    this.selectedDiscounts = "";
  }

  public removeServiceBudgets(): void {
    this.budget.budgetDetails = [];
  }

  addDiscount(): void {
    
    this.budget.budgetDiscountLines.push(this.budgetDiscountLine);

    this.selectedDiscounts = this.selectedDiscounts + " " + String(this.getValueByIdDiscount(this.budgetDiscountLine.discount.id-1))

    console.log('>>[form.component] length: ', this.budget.budgetDiscountLines.length);
    console.log('>>[form.component] array: ', this.budget.budgetDiscountLines);

    this.budgetDiscountLine = new BudgetDiscountLine();
    this.budgetDiscountLine.discount = new Discount();
  }

  addServiceBudget(): void {
    
    this.budget.budgetDetails.push(this.budgetDetail);

    this.budgetDetail = new BudgetDetail();
    this.budgetDetail.serviceBudget = new ServiceBudget();
  }
  
}