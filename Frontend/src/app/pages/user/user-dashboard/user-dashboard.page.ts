import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.page.html',
  styleUrls: ['./user-dashboard.page.scss'],
})
export class UserDashboardPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  invoke():void{
    console.log('Success')
  }
  logout(){
    this.router.navigate(['home']);
   
}
}
