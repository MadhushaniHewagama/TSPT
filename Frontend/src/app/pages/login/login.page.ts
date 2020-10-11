import { Component, OnInit } from '@angular/core';
// import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';
import { ToastController, Platform } from '@ionic/angular';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { LoadingService } from '../../services/loading.service';
// import { ErrorMessageService } from 'src/app/services/error-message.service';
import { NavController } from "@ionic/angular";
import { FormGroup, Validators, FormControl } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  errorMessage: string;
  user_name: string;
  pwd_invalid: boolean;
  user_name_invalid: boolean;
  public login_user_form: FormGroup;
  public _formInvalid = false;

  constructor(
    public toastController: ToastController,
    // private userService: UserService,
    private authService: AuthService,
    // public errorMessageServe: ErrorMessageService,
    private route: ActivatedRoute,
    private router: Router,
    private platform: Platform,
    public loading: LoadingService,
    public nav: NavController,
  ) { }

  ngOnInit() {
    this.createForm();
    this.pwd_invalid=false;
    this.user_name_invalid=false;
    // this.getNavParams();
  }
  back(): void {
    this.nav.back();
  }

  createForm(): void {
    this.login_user_form = new FormGroup({
      user_name: new FormControl("", [
        Validators.required
      ]),
      password: new FormControl("", [
        Validators.required
      ])
 
    });
  }

  login() {
    this.loading.present();
    this.pwd_invalid=false;
    if (!this.login_user_form.valid) {
      this.loading.dismiss();
      return}
    this.authService.getLogin(this.login_user_form.controls.user_name.value).subscribe(
      res => {
        // console.log(res);
        // console.log(res[0].privilege);
        // console.log(res.privilege===1);
        try{
          if(res[0].password==this.login_user_form.controls.password.value){
            if (res[0].privilege === 0) {
              const navigationExtras: NavigationExtras = {
                state: {
                  login_status: res[0]
                }
              };
              this.router.navigate(['user-dashboard'], navigationExtras);
            }else if(res[0].privilege ===1){
              const navigationExtras: NavigationExtras = {
                state: {
                  login_status: res[0]
                }
              };
              this.router.navigate(['inspector-dashboard'], navigationExtras);
            }else{
              const navigationExtras: NavigationExtras = {
                state: {
                  login_status: res[0]
                }
              };
              this.router.navigate(['manager-dashboard'], navigationExtras);
            }
          }else{
            this.pwd_invalid=true;
          }
          
         
          this.loading.dismiss();
        }
        catch(err){
          this.user_name_invalid=true;
        // this.errorMessageServe.showServerError(err.status);
        this.loading.dismiss();
        }
       
      },
      err => {
        console.log('Error :: ', err);
        this.user_name_invalid=true;
        // this.errorMessageServe.showServerError(err.status);
        this.loading.dismiss();
      }
    );
    this.loading.dismiss();
  }

  // getNavParams() {
  //   this.route.queryParams.subscribe(params => {
  //     if (this.router.getCurrentNavigation().extras.state) {
  //       this.errorMessage = this.router.getCurrentNavigation().extras.state.login_status.errorMessage;
  //     }
  //   });
  // }

}
