import { Component, OnInit, Input } from '@angular/core';
import {AreaService} from '../area/area.service'
import { Area } from '../area/area';
import { ServiceBudget } from '../service-budget/service-budget';

@Component({
  selector: 'area-service[serviceBudget]',
  templateUrl: './area-service.component.html',
})
export class AreaServiceComponent implements OnInit {
  areas: Area[];
  public area: Area = {id: 0, name: ''};

  @Input() serviceBudget: ServiceBudget;

  constructor(private areaService: AreaService) { }

  ngOnInit(): void {
    this.areaService
      .getAreas()
      .subscribe((areas) => (this.areas = areas));
  }

}
