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
  constructor(private barcodeScanner: BarcodeScanner,private router: Router) { }

  ngOnInit() {
    this.scan();
  }
  scan() {
    this.barcodeScanner.scan().then(barcodeData =>{
            this.scannedCode=barcodeData.text;
          })
        }
        backClicked(): void {
          this.router.navigate(['inspector-dashboard']);
        }
      
  }
  
  

