import { Component, OnInit } from '@angular/core';
import { Budget } from './budget';
import { Company } from '../company/company';
import { Payment } from '../payment/payment';
import { Discount } from '../discount/discount';
import { PaymentCondition } from '../payment-condition/payment-condition';
import { BudgetDiscountLine } from '../budget-discount-line/budget-discount-line';
import { DiscountService } from '../discount/discount.service';
import { BudgetDetail } from '../budget-detail/budget-detail';
import { ServiceBudget } from '../service-budget/service-budget';
import { BudgetService } from './budget.service';
import {Router, ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {
  public budget: Budget = new Budget();
  public company: Company = new Company();
  public payment: Payment = new Payment();
  public discount: Discount = new Discount();
  public titulo: string = 'Nuevo presupuesto';
  public paymentCondition: PaymentCondition = new PaymentCondition();
  public budgetDiscountLine: BudgetDiscountLine = new BudgetDiscountLine();
  public budgetDetail: BudgetDetail = new BudgetDetail();
  public selectedDiscounts: string = "";

  discounts: Discount[];

  constructor(
    private discountService: DiscountService,
    private budgetService: BudgetService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {

        this.budget.company = this.company;
        this.budget.payment = this.payment;
        this.budget.paymentCondition = this.paymentCondition;

        this.budget.budgetDiscountLines = new Array()
        this.budget.budgetDetails = new Array()

        this.budgetDiscountLine.discount = new Discount();

        this.budgetDetail.serviceBudget = new ServiceBudget();

        this.loadBudget();

    this.discountService.getDiscounts().subscribe((discounts) => (this.discounts = discounts));
  }

  loadBudget(): void{
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.budgetService.getBudget(id).subscribe( (budget) => {
          this.budget = budget;

          this.budget.company = budget.company;
          this.budget.payment = budget.payment;
          this.budget.paymentCondition = budget.paymentCondition;
          this.budget.budgetDiscountLines = budget.budgetDiscountLines;
          this.budget.budgetDetails = budget.budgetDetails;

          this.budget.budgetDiscountLines.forEach((budgetDiscountLine) => {
            this.selectedDiscounts = this.selectedDiscounts + " " +  String(budgetDiscountLine.discount.value);
          })

        })
      }    
    })
  }

  manageAction(actionType: string): void {
    if (actionType === "add") {
      this.addDiscount();
    } else if(actionType === "create") {
      this.create();
    } else if(actionType === "remove") {
      this.remove();
    } else if(actionType === "addServiceBudget") {
      this.addServiceBudget();
    } else if(actionType === "removeServiceBudgets") {
      this.removeServiceBudgets();
    } else if(actionType === "update") {
      this.update();
    }
  }

  public create(): void {

    if(this.budget.expirationDays != null &&
      this.budget.company != null &&
      this.budget.clientName !== null &&
      this.budget.paymentCondition !== null &&
      this.budget.paymentCondition !== null &&
      this.budget.budgetDetails !== null && this.budget.budgetDetails.length > 0) {

        this.budgetService.create(this.budget).subscribe(
          budget => {
            this.router.navigate(['/budgets'])  
          }
        )
      } else {
        alert('Completar campos obligatorios (*)')
      }

  }

  public getValueByIdDiscount(id: number): number {
    let valueDiscount = this.discounts[id].value;
    return valueDiscount;
  }

  public remove(): void {
    this.budget.budgetDiscountLines = [];
    this.selectedDiscounts = "";
  }

  public removeServiceBudgets(): void {
    this.budget.budgetDetails = [];
  }

  addDiscount(): void {
    
    if(this.budget.budgetDiscountLines !== null && 
      this.budget.budgetDiscountLines.length > 0 ) {

      this.budget.budgetDiscountLines.push(this.budgetDiscountLine);

      this.selectedDiscounts = this.selectedDiscounts + " " + String(this.getValueByIdDiscount(this.budgetDiscountLine.discount.id-1))

      this.budgetDiscountLine = new BudgetDiscountLine();
      this.budgetDiscountLine.discount = new Discount();
    }
  }

  addServiceBudget(): void {

    if(this.budgetDetail !== null
      && this.budgetDetail.serviceBudget.id > 0
      && this.budgetDetail.amount > 0
      ) {
        this.budget.budgetDetails.push(this.budgetDetail);

        this.budgetDetail = new BudgetDetail();
        this.budgetDetail.serviceBudget = new ServiceBudget();
    }

  }

  update():void{
    this.budgetService.update(this.budget)
    .subscribe( budget => {
      this.router.navigate(['/budgets'])
    }

    )
  }

  
}