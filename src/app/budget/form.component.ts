import { Component, OnInit } from '@angular/core';
import { Budget } from './budget';
import { Company } from '../company/company';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {
  public budget: Budget = new Budget();
  public company: Company = new Company();
  public titulo: string = 'Nuevo presupuesto';
  public paymentCondition: number[] = [30, 60, 120];

  constructor() {}

  ngOnInit(): void {
    this.budget.clientName = 'quito';
    this.budget.company = this.company;
  }

  public create(): void {
    console.log('Clicked!');
    console.log('###', this.budget);
  }
}
