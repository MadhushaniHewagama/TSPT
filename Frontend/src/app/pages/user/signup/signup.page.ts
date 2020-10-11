import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormControl } from "@angular/forms";

import { NavController } from "@ionic/angular";
import { Router } from "@angular/router";
// import { ErrorMessageService } from 'src/app/services/error-message.service';
import { ToastController } from '@ionic/angular';
import { LoadingService } from 'src/app/services/loading.service';
import { UserService } from 'src/app/services/user.service';
import { User } from "src/app/models/user";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  public register_user_form: FormGroup;
  public _formInvalid = false;
  public errorMessage: string;
  public user_obj:User;
  constructor(
    private user_service: UserService,
    public nav: NavController,
    public loading: LoadingService,
    // public errorMessageServe: ErrorMessageService,
    public toastController: ToastController,
    private router: Router
  ) {}

  ngOnInit() {    
    this.createForm();
  }
  back(): void {
    this.nav.back();
  }
  createForm(): void {
    this.register_user_form = new FormGroup({
      user_name: new FormControl("", [
        Validators.required
      ]),
      nic: new FormControl("", [
        Validators.required
      ]),
      phone_number: new FormControl("", [
        Validators.required
      ]),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [
        Validators.required
      ])
 
    });
  }

  register(): void {
    this.loading.present();
    this.user_obj = this.register_user_form.value;
    if (this.register_user_form.valid) {
      
      this.user_service.register(this.user_obj).subscribe(
        res => {
          // this.events.publish('user:added');
          // this.errorMessage=""
          // this.errorMessageServe.showMessage((' successfully'),this.errorMessage,'success');
      
          // this.router.navigate(["/admin-dashbord/users"]);
          console.log("success");
          this.router.navigate(['login']);
          this.loading.dismiss();
        
        },
        err => {
          // this.errorMessage="SSOID or Email already exist!!!"
          // this.errorMessageServe.showMessage("Please check your SSO ID or Email and try again!!",this.errorMessage,'danger');
          this.loading.dismiss();
        }
      );
    } else {
      Object.keys(this.register_user_form.controls).forEach(fielsd => {
        const control = this.register_user_form.get(fielsd);
        control.markAsTouched({ onlySelf: true });
      });
      this.loading.dismiss();
    }
  }
    
}
