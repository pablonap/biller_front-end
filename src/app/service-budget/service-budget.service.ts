import { Injectable } from '@angular/core';
import { ServiceBudget } from './service-budget';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceBudgetService {
  private urlEndPoint: string = 'http://localhost:8080/api/services';
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {}

  getServiceBudgets(id:any): Observable<ServiceBudget[]> {
    return this.http
      .get(`http://localhost:8080/api/areas/${id}/servicios`)
      .pipe(map((response) => response as ServiceBudget[]));
  }

  getAllServicesBudgets(): Observable<ServiceBudget[]> {
    return this.http
      .get(this.urlEndPoint)
      .pipe(map((response) => response as ServiceBudget[]));
  }

  create(serviceBudget: ServiceBudget) : Observable<ServiceBudget> {
    return this.http.post<ServiceBudget>(this.urlEndPoint, serviceBudget, {headers: this.httpHeaders})
  }

  update(serviceBudget: ServiceBudget): Observable<ServiceBudget>{
    return this.http.put<ServiceBudget>(`${this.urlEndPoint}/${serviceBudget.id}`, serviceBudget, {headers: this.httpHeaders})
  }

  getServiceBudgetById(id): Observable<ServiceBudget>{
    return this.http.get<ServiceBudget>(`${this.urlEndPoint}/${id}`)
  }

  delete(id: number): Observable<ServiceBudget>{
    return this.http.delete<ServiceBudget>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders})
  }

}