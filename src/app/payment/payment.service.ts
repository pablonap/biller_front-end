import { Injectable } from '@angular/core';
import { Payment } from './payment';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private urlEndPoint: string = 'http://localhost:8080/api/payments';
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {}

  getPayments(): Observable<Payment[]> {
    return this.http
      .get(this.urlEndPoint)
      .pipe(map((response) => response as Payment[]));
  }
}
