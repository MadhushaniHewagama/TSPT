import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router ,ActivatedRoute} from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { DataService } from 'src/app/services/data.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-paymnet',
  templateUrl: './paymnet.page.html',
  styleUrls: ['./paymnet.page.scss'],
})
export class PaymnetPage implements OnInit {
  amount:any;
  constructor(public dataService:DataService,public loading: LoadingService,public userService:UserService,public navCtrl: NavController,private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.getNavParams();
  }

  backClicked():void{
    this.navCtrl.back();
  }
  getNavParams() {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.amount = this.router.getCurrentNavigation().extras.state.credit;
      }
    });
  }
  pay(){
    this.loading.present();
    this.userService.updateCredit(this.dataService.getUserName(),this.amount).subscribe(
      res=>{
        console.log(res[0]);
  
        this.router.navigate(['user-dashboard']);
        this.loading.dismiss();

      },
      err=>{
        console.log(err);
        this.loading.dismiss();
      }
    );
  }

}
