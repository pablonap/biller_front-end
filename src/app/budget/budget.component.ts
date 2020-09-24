import { Component, OnInit } from '@angular/core';
import { Budget } from './budget';
import { BudgetService } from './budget.service';
import swal from 'sweetalert2';

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

  delete(budget: Budget): void {
    swal({
      title: 'Está seguro?',
      text: `¿Seguro que desea eliminar el presupuesto con numero: ${budget.numberBudget}?`,
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

        this.budgetService.delete(budget.id).subscribe(
          response => {
            this.budgets = this.budgets.filter(elem => elem !== budget)
            swal(
              'Presupuesto eliminado!',
              `Presupuesto ${budget.numberBudget} eliminado con éxito.`,
              'success'
            )
          }
        )

      }
    })
  }
}
