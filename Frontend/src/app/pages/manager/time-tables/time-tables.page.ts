import { Component, OnInit } from '@angular/core';

import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router,NavigationExtras } from '@angular/router';
import { LoadingService } from 'src/app/services/loading.service';
import { ManagerService } from 'src/app/services/manager.service';

@Component({
  selector: 'app-time-tables',
  templateUrl: './time-tables.page.html',
  styleUrls: ['./time-tables.page.scss'],
})
export class TimeTablesPage implements OnInit {

  constructor(private managerService: ManagerService,public navCtrl: NavController,public loading: LoadingService,private router: Router) { }
  public routes : any;
  ngOnInit() {
    this.loadRoutes();
  }

  loadRoutes() {console.log('::::::::::::::::::::::::')
    this.loading.present();
    this.managerService.getRoutes().subscribe(
      res =>{
        console.log(res[0])
        console.log(JSON.stringify(res[0]))
        console.log('::::::::::::::::::::::::')
        this.routes=res;
        this.loading.dismiss();
      },
      err => {
        this.loading.dismiss();
        console.log(err);
      }
    );
  }
  backClicked() {
    this.navCtrl.back();
  }
}
