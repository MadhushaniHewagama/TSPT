import { Component, OnInit } from '@angular/core';
// import{BarcodeScanner} from '@ionic-native'
@Component({
  selector: 'app-request-token',
  templateUrl: './request-token.page.html',
  styleUrls: ['./request-token.page.scss'],
})
export class RequestTokenPage implements OnInit {

//   constructor(private barcodeScanner: BarcodeScanner) { }
//   start_loc: any=null;
//   end_loc:any=null;
//   cost:any=null;
//   createdCode=null;
//   scannedCode=null;
  ngOnInit() {
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
