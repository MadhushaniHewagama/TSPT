
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
  
import {  API_URL } from '../config/constants';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  public register(user_name: string, nic: string, phone_number: number, emai): Observable<any> {
    const url = `${API_URL}/users/auth/${user_name}`;
    return this.httpClient.get(url);
  }
}
