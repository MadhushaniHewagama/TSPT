import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { LoadingService } from 'src/app/services/loading.service';
import { Router } from '@angular/router';
import { ManagerService } from 'src/app/services/manager.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.page.html',
  styleUrls: ['./overview.page.scss'],
})
export class OverviewPage implements OnInit {

  constructor(public managerService:ManagerService,public navCtrl: NavController,public loading: LoadingService,private router: Router) { }
  data={users:0,buses:0,inspectors:0,ticket_violations:0,amount:0}
  ngOnInit() {
    this.loadData();
  }
  loadData() {
    this.loading.present();
    this.managerService.getOverview().subscribe(
      res =>{
        this.data=res;
        console.log(res)
        this.loading.dismiss();
      },
      err => {
        this.loading.dismiss();
        console.log(err);
      }
    );
  }

  backCliked():void{
    this.navCtrl.back();
  }

}
