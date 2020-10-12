import { Component, OnInit } from '@angular/core';
import { ManagerService } from 'src/app/services/manager.service';
import { NavController } from '@ionic/angular';
import { Router,NavigationExtras } from '@angular/router';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.page.html',
  styleUrls: ['./view-users.page.scss'],
})
export class ViewUsersPage implements OnInit {

  constructor(private managerService: ManagerService,public navCtrl: NavController,public loading: LoadingService, private router: Router) { }
  public users:any;
  ngOnInit() {
    this.loadUsers();
  }
  loadUsers() {this.loading.present();
    this.loading.present();
    this.managerService.getUsers().subscribe(
      res =>{
        console.log(res[0])
        this.users=res;
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
  view_user(user:any){
    this.loading.present();
    const navigationExtras: NavigationExtras = {
      state: {
        user_name: user.user_name
      }
    };

    this.router.navigate(['view-user'],navigationExtras);
    this.loading.dismiss();
  }
}
