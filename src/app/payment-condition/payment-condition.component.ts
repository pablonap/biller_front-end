import { Component, OnInit, Input } from '@angular/core';
import { PaymentCondition } from './payment-condition';
import { PaymentConditionService } from './payment-condition.service';
import { Budget } from '../budget/budget';

@Component({
  selector: 'select-payment-condition[budget]',
  templateUrl: './payment-condition.component.html',
})
export class PaymentConditionComponent implements OnInit {

  paymentConditions: PaymentCondition[];
  public selectedPaymentCondition : PaymentCondition = { id: 0, days: null };

  @Input() budget: Budget;

  constructor(
    private paymentConditionService: PaymentConditionService
  ) {}

  ngOnInit(): void {
    this.paymentConditionService.getPaymentConditions().subscribe((data) => (this.paymentConditions = data));
  }

}
