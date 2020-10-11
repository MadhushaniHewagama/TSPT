import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingService } from '../../../services/loading.service';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.page.html',
  styleUrls: ['./user-dashboard.page.scss'],
})
export class UserDashboardPage implements OnInit {

  constructor(public toastController: ToastController,public loading: LoadingService,private router: Router) { }

  ngOnInit() {
  }
  token():void{
    this.loading.present();
    this.router.navigate(['request-token']);
    this.loading.dismiss();
  }
  account():void{
    this.loading.present();
    this.router.navigate(['account']);
    this.loading.dismiss();
  }
  addCredit():void{
    this.loading.present();
    this.router.navigate(['add-credit']);
    this.loading.dismiss();
  }
  logout(){
    this.loading.present();
    this.router.navigate(['home']);
    this.loading.dismiss();
   
}
}
