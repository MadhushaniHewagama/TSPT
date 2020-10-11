import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingService } from '../../../services/loading.service';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-manager-dashboard',
  templateUrl: './manager-dashboard.page.html',
  styleUrls: ['./manager-dashboard.page.scss'],
})
export class ManagerDashboardPage implements OnInit {

  constructor(public toastController: ToastController,public loading: LoadingService,private router: Router) { }

  ngOnInit() {
  }

  overview():void{
    this.loading.present();
    this.router.navigate(['overview']);
    this.loading.dismiss();
  }
  timeTable():void{
    this.loading.present();
    this.router.navigate(['time-tables']);
    this.loading.dismiss();
  }
  reports():void{
    this.loading.present();
    this.router.navigate(['reports']);
    this.loading.dismiss();
  }
  viewInspector():void{
    this.loading.present();
    this.router.navigate(['view-inspectors']);
    this.loading.dismiss();
  }
  viewUsers():void{
    this.loading.present();
    this.router.navigate(['view-users']);
    this.loading.dismiss();
  }
  logout(){
    this.router.navigate(['home']);
   
}
}
