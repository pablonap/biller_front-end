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


const routes: Routes = [
  { path: '', redirectTo: 'budgets', pathMatch: 'full' },
  { path: 'budgets', component: BudgetComponent },
  { path: 'budgets/form', component: FormComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BudgetComponent,
    FormComponent,
    CompanyComponent,
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, RouterModule.forRoot(routes)
  ],
  providers: [BudgetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
