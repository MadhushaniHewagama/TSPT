
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router,NavigationExtras } from '@angular/router';
import { LoadingService } from 'src/app/services/loading.service';
import { ManagerService } from 'src/app/services/manager.service';


@Component({
  selector: 'app-reports',
  templateUrl: './reports.page.html',
  styleUrls: ['./reports.page.scss'],
})

export class ReportsPage implements OnInit {
  
  constructor(private managerService: ManagerService,public navCtrl: NavController,public loading: LoadingService,private router: Router) { }
  public tickets : any;
  ngOnInit() {
    this.loadTickets();
  }

  loadTickets() {console.log('::::::::::::::::::::::::')
    this.loading.present();
    this.managerService.getTickets().subscribe(
      res =>{
        console.log(res[0])
        console.log(JSON.stringify(res[0]))
        console.log('::::::::::::::::::::::::')
        this.tickets=res;
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
