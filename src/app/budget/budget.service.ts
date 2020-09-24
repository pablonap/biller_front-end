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
    // This could be another way of doing so.
    // return this.http.get<Budget[]>(this.urlEndPoint);
    return this.http
      .get(this.urlEndPoint)
      .pipe(map((response) => response as Budget[]));
  }

  create(budget: Budget) : Observable<Budget> {
    return this.http.post<Budget>(this.urlEndPoint, budget, {headers: this.httpHeaders})
  }

  update(budget: Budget): Observable<Budget>{
    return this.http.put<Budget>(`${this.urlEndPoint}/${budget.id}`, budget, {headers: this.httpHeaders})
  }

  getBudget(id): Observable<Budget>{
    return this.http.get<Budget>(`${this.urlEndPoint}/${id}`)
  }

  delete(id: number): Observable<Budget>{
    return this.http.delete<Budget>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders})
  }
}
