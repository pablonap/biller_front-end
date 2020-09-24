import { Component, OnInit } from '@angular/core';
import { ServiceBudget } from '../service-budget/service-budget';
import {Router, ActivatedRoute} from '@angular/router'
import { ServiceBudgetService } from '../service-budget/service-budget.service';

@Component({
  selector: 'app-service-form',
  templateUrl: './service-form.component.html',
})
export class ServiceFormComponent implements OnInit {
  public titulo: string = 'Nuevo servicio';
  public serviceBudget: ServiceBudget = new ServiceBudget ();

  constructor(
    private serviceBudgetService: ServiceBudgetService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {}
    

  ngOnInit(): void {
  }

  manageAction(actionType: string): void {
    if (actionType === "create") {
      this.create();
    } 
  }

  public create(): void {
    this.serviceBudgetService.create(this.serviceBudget).subscribe(
      serviceBudget => {
        this.router.navigate(['/budgets/services'])  
      }
    )
  }

}