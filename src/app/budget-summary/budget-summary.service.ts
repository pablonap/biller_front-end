import { Injectable } from '@angular/core';
import { Budget } from '../budget/budget';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BudgetSummaryService {

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    private urlEndPoint: string = 'http://localhost:8080/api/budgets';

  constructor(private http: HttpClient) {}

  getBudget(id: number): Observable<Budget>{
    return this.http.get<Budget>(`${this.urlEndPoint}/${id}`)
  }
}
