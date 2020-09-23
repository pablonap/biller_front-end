import { Injectable } from '@angular/core';
import { PaymentCondition } from './payment-condition';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaymentConditionService {

  private urlEndPoint: string = 'http://localhost:8080/api/payment-conditions';
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {}

  getPaymentConditions(): Observable<PaymentCondition[]> {
    return this.http
      .get(this.urlEndPoint)
      .pipe(map((response) => response as PaymentCondition[]));
  }
}