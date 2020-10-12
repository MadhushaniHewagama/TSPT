import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-credit',
  templateUrl: './add-credit.page.html',
  styleUrls: ['./add-credit.page.scss'],
})
export class AddCreditPage implements OnInit {

  constructor(private router: Router ) {
    }

  ngOnInit() {
  }
proceed():void{
  this.router.navigate(['paymnet']);
}
}
