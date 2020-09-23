import { Component, OnInit } from '@angular/core';
import { ServiceBudget } from './service-budget';
import { ServiceBudgetService } from './service-budget.service';

@Component({
  selector: 'app-service-budget',
  templateUrl: './service-budget.component.html',
})
export class ServiceBudgetComponent implements OnInit {
  serviceBudgets: ServiceBudget[];
  public selectedSb: ServiceBudget = { id: 0, code: '', name: '', detail: '', price: 0, optional: false}
  constructor(private serviceBudgetService: ServiceBudgetService) {}

  ngOnInit(): void {
  }

}