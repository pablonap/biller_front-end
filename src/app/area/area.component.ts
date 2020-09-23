import { Component, OnInit, Input } from '@angular/core';
import { Area } from './area';
import { AreaService } from './area.service';
import { ServiceBudget } from '../service-budget/service-budget';
import { ServiceBudgetService } from '../service-budget/service-budget.service';
import { BudgetDetail } from '../budget-detail/budget-detail';

@Component({
  selector: 'select-area[budgetDetail]',
  templateUrl: './area.component.html',
})
export class AreaComponent implements OnInit {
  areas: Area[];
  public selectedArea: Area = {id: 0, name: ''};
  public serviceBudgets: ServiceBudget[];

  @Input() budgetDetail: BudgetDetail;

  constructor(private areaService: AreaService, private serviceBudgetService: ServiceBudgetService) {}

  ngOnInit(): void {
    this.areaService
      .getAreas()
      .subscribe((areas) => (this.areas = areas));
  }

  onSelect(id:any):void {
    console.log('id: ', id)
    this.serviceBudgetService.getServiceBudgets(id)
      .subscribe((sbs) => (this.serviceBudgets = sbs));
  }


}