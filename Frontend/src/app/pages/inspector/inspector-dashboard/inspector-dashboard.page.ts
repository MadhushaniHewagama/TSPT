import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingService } from '../../../services/loading.service';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-inspector-dashboard',
  templateUrl: './inspector-dashboard.page.html',
  styleUrls: ['./inspector-dashboard.page.scss'],
})
export class InspectorDashboardPage implements OnInit {

  constructor(public toastController: ToastController,public loading: LoadingService,private router: Router) { }

  ngOnInit() {
  }
  scanQR():void{
    this.loading.present();
    this.router.navigate(['scan-qr']);
    this.loading.dismiss();
  }
  ticket():void{
    this.loading.present();
    this.router.navigate(['manual-ticket']);
    this.loading.dismiss();
  }
  viewTickets():void{
    this.loading.present();
    this.router.navigate(['view-ticket']);
    this.loading.dismiss();
  }
logout(){
  this.router.navigate(['home']);
 
}
}
