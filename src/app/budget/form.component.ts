import { Component, OnInit } from '@angular/core';
import { Budget } from './budget';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {

  public budget: Budget = new Budget()
  public titulo:string = "Nuevo presupuesto"

  constructor() { }

  ngOnInit(): void {
  }

  public create(): void {
    console.log("Clicked!")
    console.log(this.budget)
  }

}
