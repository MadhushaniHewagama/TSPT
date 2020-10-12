import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { LoadingService } from 'src/app/services/loading.service';
import { DataService } from 'src/app/services/data.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.page.html',
  styleUrls: ['./trips.page.scss'],
})
export class TripsPage implements OnInit {

  constructor(private userService: UserService,public navCtrl: NavController,public loading: LoadingService,private dataService: DataService,private router: Router) { }
  public trips:any;
  ngOnInit() {
    this.loadTrips(this.dataService.getUserName());
  }
  backClicked() {
    this.navCtrl.back();
  }
  loadTrips(user_name: string) {
    this.loading.present();
    this.userService.getTrips(user_name).subscribe(
      res =>{
        console.log(res[0])
        this.trips=res;
        this.loading.dismiss();
      },
      err => {
        this.loading.dismiss();
        console.log(err);
      }
    );
  }

}
