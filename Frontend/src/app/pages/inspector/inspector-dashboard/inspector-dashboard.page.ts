import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-inspector-dashboard',
  templateUrl: './inspector-dashboard.page.html',
  styleUrls: ['./inspector-dashboard.page.scss'],
})
export class InspectorDashboardPage implements OnInit {

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
