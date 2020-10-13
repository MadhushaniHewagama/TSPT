import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Router } from "@angular/router";
@Component({
  selector: 'app-scan-qr',
  templateUrl: './scan-qr.page.html',
  styleUrls: ['./scan-qr.page.scss'],
})
export class ScanQrPage implements OnInit {
  scannedCode=null;
  Data:any;
  valid:boolean=false;
  user_name:string='user';
  qrscan:boolean=false;
  constructor(private barcodeScanner: BarcodeScanner,private router: Router) { }

  ngOnInit() {
    this.scan();
  }
  scan() {
    this.barcodeScanner.scan().then(barcodeData =>{
      this.qrscan=true;
            this.scannedCode=barcodeData.text;
            this.Data=JSON.parse(this.scannedCode);
            this.user_name=this.Data['user_name'];
            if(this.Data['violation']==0){
              this.valid=true;
            }

          })
        }
        backClicked(): void {
          this.router.navigate(['inspector-dashboard']);
        }
      
  }
  
  

