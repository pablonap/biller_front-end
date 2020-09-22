import { Injectable } from '@angular/core';
import { Budget } from './budget';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BudgetService {
  private urlEndPoint: string = 'http://localhost:8080/api/budgets';
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {}

  getBudgets(): Observable<Budget[]> {
    return this.http
      .get(this.urlEndPoint)
      .pipe(map((response) => response as Budget[]));
  }
}
