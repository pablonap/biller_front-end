import { Component, OnInit } from '@angular/core';
import { Budget } from './budget';
import { Company } from '../company/company';
import { Payment } from '../payment/payment';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {
  public budget: Budget = new Budget();
  public company: Company = new Company();
  public payment: Payment = new Payment();
  public titulo: string = 'Nuevo presupuesto';
  public paymentCondition: number[] = [30, 60, 120];

  constructor() {}

  ngOnInit(): void {
    this.budget.company = this.company;
    this.budget.payment = this.payment;
  }

  public create(): void {
    console.log('###', this.budget);
  }
}
