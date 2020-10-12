import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingService } from 'src/app/services/loading.service';
import { ManagerService } from 'src/app/services/manager.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.page.html',
  styleUrls: ['./view-user.page.scss'],
})
export class ViewUserPage implements OnInit {
  user_name:any;
  public user: any={user_name:'',nic:'',last_date:'',last_time:''};
  constructor(public loading: LoadingService,public managerService:ManagerService,public navCtrl: NavController,private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.getNavParams();
  }
  
  backClicked():void{
    this.navCtrl.back();
  }
  getNavParams() {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.user_name = this.router.getCurrentNavigation().extras.state.user_name;
        this.loadData();
      }
    });
  }
  loadData(){
    this.loading.present();
    this.managerService.getUser(this.user_name).subscribe(
      res =>{
        this.user=res[0];
        console.log(res[0])
        this.loading.dismiss();
      },
      err => {
        this.loading.dismiss();
        console.log(err);
      }
    );
    

  }
}
