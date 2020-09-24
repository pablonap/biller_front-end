import { Component, OnInit } from '@angular/core';
import { ServiceBudget } from '../service-budget/service-budget';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceBudgetService } from '../service-budget/service-budget.service';
import {Area} from '../area/area'

@Component({
  selector: 'app-service-form',
  templateUrl: './service-form.component.html',
})
export class ServiceFormComponent implements OnInit {
  public titulo: string = 'Nuevo servicio';
  public serviceBudget: ServiceBudget = new ServiceBudget();
  public area: Area = new Area();

  constructor(
    private serviceBudgetService: ServiceBudgetService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.serviceBudget.name="";
    this.serviceBudget.optional=false;
    this.serviceBudget.code="";
    this.serviceBudget.price=null;
    this.serviceBudget.area = this.area;

    this.activatedRoute.params.subscribe((params) => {
      let id = params['id'];
      if (id) {
        this.serviceBudgetService
          .getServiceBudgetById(id)
          .subscribe((serviceBudget) => (this.serviceBudget = serviceBudget));
      }
    });
  }

  manageAction(actionType: string): void {
    if (actionType === 'create') {
      this.create();
    } else if(actionType === 'update') {
      this.update();
    }
  }

  public create(): void {

    if(this.serviceBudget !== null 
      && this.serviceBudget.code !== null
      && this.serviceBudget.name !== null
      && this.serviceBudget.detail !== null
      && this.serviceBudget.price !== null
      && this.serviceBudget.area !== null
      && this.serviceBudget.area.id > 0) {

      this.serviceBudgetService
        .create(this.serviceBudget)
        .subscribe((serviceBudget) => {
          this.router.navigate(['/service']);
        });
      } else {
        alert("Completar campos obligatorios (*)")
      }

  }

  update():void{

    if(this.serviceBudget !== null 
      && this.serviceBudget.code !== null
      && this.serviceBudget.name !== null
      && this.serviceBudget.detail !== null
      && this.serviceBudget.price !== null
      && this.serviceBudget.area !== null
      && this.serviceBudget.area.id > 0) {

      this.serviceBudgetService.update(this.serviceBudget)
      .subscribe( budget => {
        this.router.navigate(['/service'])
      })

      } else {
        alert("Completar campos obligatorios (*)")
      }



  }
}

