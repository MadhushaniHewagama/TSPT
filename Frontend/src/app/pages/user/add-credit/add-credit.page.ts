import { Component, OnInit } from '@angular/core';
import { Router,NavigationExtras } from '@angular/router';
import {  ToastController } from "@ionic/angular";
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { LoadingService } from 'src/app/services/loading.service';
@Component({
  selector: 'app-add-credit',
  templateUrl: './add-credit.page.html',
  styleUrls: ['./add-credit.page.scss'],
})
export class AddCreditPage implements OnInit {

  public credit_form: FormGroup;
  public _formInvalid = false;
  constructor( public toastController: ToastController,public loading: LoadingService,private router: Router ) {
    }

  ngOnInit() {
    this.createForm();
  }
  createForm(): void {
    this.credit_form = new FormGroup({
      credit: new FormControl("", [
        Validators.required
      ])
 
    });
  }
proceed():void{
  this.loading.present(); 
  const navigationExtras: NavigationExtras = {
    state: {
      credit: this.credit_form.controls.credit.value
    }
  };
  this.router.navigate(['paymnet'],navigationExtras);
  this.loading.dismiss();
}
back(): void {
  this.router.navigate(['user-dashboard']);
}
}
