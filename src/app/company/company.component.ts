import { Component, OnInit, Input } from '@angular/core';
import { Company } from './company';
import { CompanyService } from './company.service';
import {Budget} from '../budget/budget';

@Component({
  selector: 'select-company[budget]',
  templateUrl: './company.component.html',
})
export class CompanyComponent implements OnInit {

  companies: Company[];
  public selectedCompany: Company = { id: 0, name: '', address: '', email: '', phone: '' };

  @Input() budget: Budget;

  constructor(
    private companyService: CompanyService
  ) {}

  ngOnInit(): void {
    this.companyService.getCompanies().subscribe((companies) => (this.companies = companies));
  }
}
