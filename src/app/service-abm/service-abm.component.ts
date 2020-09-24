import { Component, OnInit } from '@angular/core';
import { ServiceBudget } from '../service-budget/service-budget';
import { ServiceBudgetService } from '../service-budget/service-budget.service';
import swal from 'sweetalert2';

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
    swal({
      title: 'Está seguro?',
      text: `¿Seguro que desea eliminar el servicio con codigo: ${serviceBudget.code}?`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
      cancelButtonText: 'No',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: false,
      reverseButtons: true
    }).then((result) => {
      if (result.value) {

        this.serviceBs.delete(serviceBudget.id).subscribe(
          response => {
            this.serviceBudgets = this.serviceBudgets.filter(service => service !== serviceBudget)
            swal(
              'Servicio eliminado!',
              `Servicio ${serviceBudget.name} eliminado con éxito.`,
              'success'
            )
          }
        )

      }
    })
  }
}
