import { Component, OnInit } from '@angular/core';
import { ServiceBudget } from '../service-budget/service-budget';
import { ServiceBudgetService } from '../service-budget/service-budget.service';

@Component({
  selector: 'service-abm',
  templateUrl: './service-abm.component.html',
})
export class ServiceAbmComponent implements OnInit {
  serviceBudgets: ServiceBudget[];

  constructor(private serviceBs: ServiceBudgetService) {}

  ngOnInit(): void {
    this.serviceBs
      .getAllServicesBudgets()
      .subscribe((serviceBudgets) => (this.serviceBudgets = serviceBudgets));
  }

  delete(serviceBudget: ServiceBudget): void {
    this.serviceBs.delete(serviceBudget.id).subscribe(response => response)
  }
}
