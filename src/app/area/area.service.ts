import { Injectable } from '@angular/core';
import { Area } from './area';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AreaService {
  private urlEndPoint: string = 'http://localhost:8080/api/areas';
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {}

  getAreas(): Observable<Area[]> {
    return this.http
      .get(this.urlEndPoint)
      .pipe(map((response) => response as Area[]));
  }
}