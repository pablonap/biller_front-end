import { Component, OnInit } from '@angular/core';
import { Budget } from './budget';
import { BudgetService } from './budget.service';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
})
export class BudgetComponent implements OnInit {
  budgets: Budget[];

  constructor(private budgetService: BudgetService) {}

  ngOnInit(): void {
    this.budgetService
      .getBudgets()
      .subscribe(budgets => this.budgets = budgets);
  }
}
