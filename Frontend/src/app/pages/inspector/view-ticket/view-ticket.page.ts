import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router,NavigationExtras } from '@angular/router';
import { LoadingService } from 'src/app/services/loading.service';
import { InspectorService } from 'src/app/services/inspector.service';

@Component({
  selector: 'app-view-ticket',
  templateUrl: './view-ticket.page.html',
  styleUrls: ['./view-ticket.page.scss'],
})
export class ViewTicketPage implements OnInit {
  
  constructor(private inspectorService: InspectorService,public navCtrl: NavController,public loading: LoadingService,private router: Router) { }
  public tickets : any;
  ngOnInit() {
    this.loadTickets();
  }

  loadTickets() {console.log('::::::::::::::::::::::::')
    this.loading.present();
    this.inspectorService.getTickets().subscribe(
      res =>{
        console.log(res[0])
        console.log(JSON.stringify(res[0]))
        console.log('::::::::::::::::::::::::')
        this.tickets=res;
        this.loading.dismiss();
      },
      err => {
        this.loading.dismiss();
        console.log(err);
      }
    );
  }
  backClicked() {
    this.navCtrl.back();
  }
}
