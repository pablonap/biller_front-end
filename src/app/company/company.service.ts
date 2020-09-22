import { Injectable } from '@angular/core';
import { Company } from './company';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  private urlEndPoint: string = 'http://localhost:8080/api/companies';
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {}

  getCompanies(): Observable<Company[]> {
    return this.http
      .get(this.urlEndPoint)
      .pipe(map((response) => response as Company[]));
  }
}
