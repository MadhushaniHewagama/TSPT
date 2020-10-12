import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {  API_URL } from '../config/constants';
@Injectable({
  providedIn: 'root'
})
export class InspectorService {

  constructor(private httpClient: HttpClient) { }
  public getTickets(): Observable<any> {
    const url = `${API_URL}/inspector/tickets`;
    return this.httpClient.get(url);
  }
  
}
