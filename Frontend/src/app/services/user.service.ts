
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
  
import {  API_URL } from '../config/constants';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  public register(user_obj:User): Observable<any> {
    console.log(JSON.stringify(user_obj))
    const url = `${API_URL}/user/register`;
    return this.httpClient.post(url,user_obj);
  }
}
