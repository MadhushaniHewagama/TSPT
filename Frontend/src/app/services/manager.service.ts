import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {  API_URL } from '../config/constants';
@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  constructor(private httpClient: HttpClient) { }
  public getUsers(): Observable<any> {
    const url = `${API_URL}/manager/view-users`;
    return this.httpClient.get(url);
  }
  public getUser(user_name:string): Observable<any> {
    const url = `${API_URL}/manager/view-user/${user_name}`;
    return this.httpClient.get(url);
  }
  public getOverview(): Observable<any> {
    const url = `${API_URL}/manager/overview`;
    return this.httpClient.get(url);
  }

  public getInspector(): Observable<any> {
    const url = `${API_URL}/manager/view-inspectors`;
    return this.httpClient.get(url);
  }
  public getTickets(): Observable<any> {
    const url = `${API_URL}/manager/reports`;
    return this.httpClient.get(url);
  }

  
}
