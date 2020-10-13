import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormControl } from "@angular/forms";

import { NavController } from "@ionic/angular";
import { Router } from "@angular/router";
// import { ErrorMessageService } from 'src/app/services/error-message.service';
import { ToastController } from '@ionic/angular';
import { LoadingService } from 'src/app/services/loading.service';
import { UserService } from 'src/app/services/user.service';
import { User } from "src/app/models/user";
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-request-token',
  templateUrl: './request-token.page.html',
  styleUrls: ['./request-token.page.scss'],
})
export class RequestTokenPage implements OnInit {
  public token_form: FormGroup;
  public _formInvalid = false;
  public qr_obj:any;
  public ticket_no:any;
  qr_created:boolean=false;
//   constructor(private barcodeScanner: BarcodeScanner) { }
//   start_loc: any=null;
//   end_loc:any=null;
//   cost:any=null;
  createdCode=null;
//   scannedCode=null;
qrData:any;
constructor(
  private user_service: UserService,
  public nav: NavController,
  public loading: LoadingService,
  public dataService:DataService,
  // public errorMessageServe: ErrorMessageService,
  public toastController: ToastController,
  private router: Router
) {}

ngOnInit() {    
  this.createForm();
}
backClicked(): void {
  this.router.navigate(['user-dashboard']);
}

createForm(): void {
  this.token_form = new FormGroup({
    start_loc: new FormControl("", [
      Validators.required
    ]),
    end_loc: new FormControl("", [
      Validators.required
    ]),
    fare: new FormControl("", [
      Validators.required
    ]),
    bus_id: new FormControl("", [Validators.required])

  });
}
create_qr(): void {
  this.loading.present();
  this.qr_obj = this.token_form.value;
  this.qr_created=true;
  
  this.qr_obj['user_name']=this.dataService.getUserName();
  
  this.user_service.getCredit(this.dataService.getUserName()).subscribe(
    res => {
      const credit=parseFloat(res[0]['credit']) ;
      if(credit< parseFloat(this.qr_obj['fare'])){
        this.qr_obj['violation']=1;
      }else{
        this.qr_obj['violation']=0;
      }
      this.user_service.createQR(this.qr_obj).subscribe(
        res => {
          
          console.log("qr success");
          console.log(JSON.stringify(res));
          this.ticket_no=res['res'][0]['tiket_id']
          this.qr_obj['ticket_no']=this.ticket_no
          this.loading.dismiss();
          // this.qrData=this.ticket_no;
          this.qrData=JSON.stringify(this.qr_obj);
          this.createdCode=this.qrData;
        
        },
        err => {
          
          this.loading.dismiss();
        }
      );
    },
    err => {
      this.loading.dismiss();
    }
  );
    
    
  
}


end_trip(){
  this.loading.present();
  this.user_service.endTrip(this.ticket_no).subscribe(
    res => {
      console.log(res[0]);
      this.createForm();
      this.qr_created=false;
      this.router.navigate(['user-dashboard']);
      this.loading.dismiss();
    },
    err => {
      console.log(err);
      this.loading.dismiss();
    }
  );

}





//   createCode(){
//     this.createdCode=this.start_loc;
//   }

//   scanCode(){
//     this.barcodeScanner.sca().then(barcodeData =>{
//       this.scannedCode=barcodeData.text;
//     })
//   }

}
