import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  user_name:any='user1';
  public setUserName(user_name: string){
    this.user_name=user_name;
  }
  public getUserName(){
    return this.user_name;
  }
}
