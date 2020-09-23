import { Component, OnInit, Input } from '@angular/core';
import { Discount } from './discount';
import { DiscountService } from './discount.service';
import { BudgetDiscountLine } from '../budget-discount-line/budget-discount-line';

@Component({
  selector: 'select-discount[budgetDiscountLine]',
  templateUrl: './discount.component.html',
})
export class DiscountComponent implements OnInit {

  discounts: Discount[];
  public selectedDiscount: Discount = { id: 0, value: null, description: ''};

  @Input() budgetDiscountLine: BudgetDiscountLine;

  constructor(
    private discountService: DiscountService
  ) {}

  ngOnInit(): void {
    this.discountService.getDiscounts().subscribe((discounts) => (this.discounts = discounts));
  }
}