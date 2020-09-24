import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BudgetComponent } from './budget/budget.component';
import { RouterModule, Routes } from '@angular/router';
import {BudgetService} from './budget/budget.service'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './budget/form.component';
import { CompanyComponent } from './company/company.component';
import { PaymentComponent } from './payment/payment.component';
import { DiscountComponent } from './discount/discount.component';
import { PaymentConditionComponent } from './payment-condition/payment-condition.component';
import { BudgetDiscountLineComponent } from './budget-discount-line/budget-discount-line.component';
import { BudgetDetailComponent } from './budget-detail/budget-detail.component';
import { ServiceBudgetComponent } from './service-budget/service-budget.component';
import { AreaComponent } from './area/area.component';
import { BudgetSummaryComponent } from './budget-summary/budget-summary.component';
import { ServiceAbmComponent } from './service-abm/service-abm.component';


const routes: Routes = [
  { path: '', redirectTo: 'budgets', pathMatch: 'full' },
  { path: 'budgets', component: BudgetComponent },
  { path: 'budgets/form', component: FormComponent },
  { path: 'budgets/summary/:id', component: BudgetSummaryComponent },
  { path: 'budgets/form/:id', component: FormComponent },
  { path: 'services', component: ServiceAbmComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BudgetComponent,
    FormComponent,
    CompanyComponent,
    PaymentComponent,
    DiscountComponent,
    PaymentConditionComponent,
    BudgetDiscountLineComponent,
    BudgetDetailComponent,
    ServiceBudgetComponent,
    AreaComponent,
    BudgetSummaryComponent,
    ServiceAbmComponent,
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, RouterModule.forRoot(routes)
  ],
  providers: [BudgetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
