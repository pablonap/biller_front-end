import { Component, OnInit } from '@angular/core';
import { Company } from './company';
import { CompanyService } from './company.service';

@Component({
  selector: 'select-company',
  templateUrl: './company.component.html',
})
export class CompanyComponent implements OnInit {

  companies: Company[];
  public selectedCompany: Company = { id: 0, name: '', address: '', email: '', phone: '' };

  constructor(
    private companyService: CompanyService
  ) {}

  ngOnInit(): void {
    this.companyService.getCompanies().subscribe((companies) => (this.companies = companies));
  }
}
