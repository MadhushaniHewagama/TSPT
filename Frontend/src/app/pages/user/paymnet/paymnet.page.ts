import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-paymnet',
  templateUrl: './paymnet.page.html',
  styleUrls: ['./paymnet.page.scss'],
})
export class PaymnetPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  backClicked():void{
    this.navCtrl.back();
  }
}
