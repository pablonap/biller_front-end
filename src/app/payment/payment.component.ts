import { Component, OnInit, Input } from '@angular/core';
import { Payment } from './payment';
import { PaymentService } from './payment.service';
import { Budget } from '../budget/budget';

@Component({
  selector: 'select-payment[budget]',
  templateUrl: './payment.component.html',
})
export class PaymentComponent implements OnInit {

  payments: Payment[];
  public selectedPayment: Payment = { id: 0, name: '', description: ''};

  @Input() budget: Budget;

  constructor(
    private paymentService: PaymentService
  ) {}

  ngOnInit(): void {
    this.paymentService.getPayments().subscribe((payments) => (this.payments = payments));
  }
}
