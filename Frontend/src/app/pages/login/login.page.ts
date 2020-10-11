import { Component, OnInit } from '@angular/core';
// import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';
import { ToastController, Platform } from '@ionic/angular';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { LoadingService } from '../../services/loading.service';
// import { ErrorMessageService } from 'src/app/services/error-message.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  errorMessage: string;
  user_name: string;
  constructor(
    public toastController: ToastController,
    // private userService: UserService,
    private authService: AuthService,
    // public errorMessageServe: ErrorMessageService,
    private route: ActivatedRoute,
    private router: Router,
    private platform: Platform,
    public loading: LoadingService
  ) { }

  ngOnInit() {

    this.getNavParams();
  }

  validate() {
    // if (this.ssoId == null || this.ssoId === '') {
    //   this.errorMessage = 'SSO ID is required';
    //   return false;
    // } else if (isNaN(Number(this.ssoId))) {
    //   this.errorMessage = 'SSO ID should be numberic';
    //   return false;
    // }  else if ((this.ssoId.toString().length !== 9)) {
    //   this.errorMessage = 'SSO ID should be 9 characters long';
    //   return false;
    // } else {
    //   this.errorMessage = null;
    //   return true;
    // }
    return true;
  }

  login() {
    if (!this.validate()) {
      return;
    }
    this.loading.present();
    this.authService.getLogin(this.user_name).subscribe(
      res => {
        console.log(res);
        // if (res.status_of_req === 'ssoError') {
        //   this.errorMessage = 'SSO ID is invalid';
        // } else if (res.status_of_req === 'ssoInactive') {
        //   this.errorMessage = 'Your account has been deactivated, Please contact HR for more info';
        // } else if (res.status_of_req === 'Valid') {
        //   const navigationExtras: NavigationExtras = {
        //     state: {
        //       login_status: res
        //     }
        //   };
        //   this.router.navigate(['pin'], navigationExtras);
        // }
        this.loading.dismiss();
      },
      err => {
        console.log('Error :: ', err);
        // this.errorMessageServe.showServerError(err.status);
        this.loading.dismiss();
      }
    );
  }

  getNavParams() {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.errorMessage = this.router.getCurrentNavigation().extras.state.login_status.errorMessage;
      }
    });
  }

}
