import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-manager-dashboard',
  templateUrl: './manager-dashboard.page.html',
  styleUrls: ['./manager-dashboard.page.scss'],
})
export class ManagerDashboardPage implements OnInit {

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
