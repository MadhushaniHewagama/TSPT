import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
  
import {  API_URL } from '../config/constants';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  public getLogin(user_name: string): Observable<any> {
    const url = `${API_URL}/users/auth/${user_name}`;
    return this.httpClient.get(url);
  }
}
