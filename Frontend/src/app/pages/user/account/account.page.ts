import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { DataService } from 'src/app/services/data.service';
import { NavController } from '@ionic/angular';
import { LoadingService } from '../../../services/loading.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  public profile: any={user_name:'',nic:'',phone_number:'',email:'',credit:''};
  constructor(private userService: UserService,public navCtrl: NavController,public loading: LoadingService,private dataService: DataService,private router: Router) {
   
   }

  ngOnInit() {
    this.loadProfile(this.dataService.getUserName());
  }
  loadProfile(user_name: string) {
    this.loading.present();
    this.userService.getProfile(user_name).subscribe(
      res =>{
        this.profile=res[0];
        console.log(res[0])
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
  viewTrips(){
    this.loading.present();
    this.router.navigate(['trips']);
    this.loading.dismiss();
  }
}
