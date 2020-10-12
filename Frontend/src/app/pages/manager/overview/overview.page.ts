import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.page.html',
  styleUrls: ['./overview.page.scss'],
})
export class OverviewPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  backCliked():void{
    this.navCtrl.back();
  }

}
