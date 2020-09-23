import { Component, OnInit } from '@angular/core';
import { Budget } from './budget';
import { Company } from '../company/company';
import { Payment } from '../payment/payment';
import { Discount } from '../discount/discount';
import { PaymentCondition } from '../payment-condition/payment-condition';

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

  constructor() {}

  ngOnInit(): void {
    this.budget.company = this.company;
    this.budget.payment = this.payment;
    this.budget.discount = this.discount;
    this.budget.paymentCondition = this.paymentCondition;
  }

  public create(): void {
    console.log('###', this.budget);
  }
}
