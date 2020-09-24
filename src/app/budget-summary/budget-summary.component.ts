import { Component, OnInit } from '@angular/core';
import { Budget } from '../budget/budget';
import { BudgetSummaryService } from './budget-summary.service';
import {Router, ActivatedRoute} from '@angular/router'

@Component({
  selector: 'budget-summary',
  templateUrl: './budget-summary.component.html',
})
export class BudgetSummaryComponent implements OnInit {

  public budget: Budget = new Budget();

  constructor(private budgetSummaryService: BudgetSummaryService, 
    private router: Router,
    private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.loadBudget()
  }

  loadBudget(): void{
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.budgetSummaryService.getBudget(id).subscribe( (budget) => this.budget = budget)
      }
    })
  }

}
