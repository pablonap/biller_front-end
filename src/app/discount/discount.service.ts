import { Injectable } from '@angular/core';
import { Discount } from './discount';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DiscountService {
  private urlEndPoint: string = 'http://localhost:8080/api/discounts';
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {}

  getDiscounts(): Observable<Discount[]> {
    return this.http
      .get(this.urlEndPoint)
      .pipe(map((response) => response as Discount[]));
  }
}