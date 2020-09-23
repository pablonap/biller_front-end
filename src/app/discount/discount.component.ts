import { Component, OnInit, Input } from '@angular/core';
import { Discount } from './discount';
import { DiscountService } from './discount.service';
import { Budget } from '../budget/budget';

@Component({
  selector: 'select-discount[budget]',
  templateUrl: './discount.component.html',
})
export class DiscountComponent implements OnInit {

  discounts: Discount[];
  public selectedDiscount: Discount = { id: 0, value: null, description: ''};

  @Input() budget: Budget;

  constructor(
    private discountService: DiscountService
  ) {}

  ngOnInit(): void {
    this.discountService.getDiscounts().subscribe((discounts) => (this.discounts = discounts));
  }
}
