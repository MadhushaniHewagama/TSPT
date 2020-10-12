import { Component, OnInit } from '@angular/core';
import { ManagerService } from 'src/app/services/manager.service';
import { NavController } from '@ionic/angular';
import { Router,NavigationExtras } from '@angular/router';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-view-inspectors',
  templateUrl: './view-inspectors.page.html',
  styleUrls: ['./view-inspectors.page.scss'],
})
export class ViewInspectorsPage implements OnInit {

  constructor(private managerService: ManagerService,public navCtrl: NavController,public loading: LoadingService,private router: Router) { }
  public inspectors : any;
  ngOnInit() {
    this.loadInspectors();
  }

  loadInspectors() {this.loading.present();
    this.loading.present();
    this.managerService.getInspector().subscribe(
      res =>{
        console.log(res[0])
        this.inspectors=res;
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
