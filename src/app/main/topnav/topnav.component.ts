import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit {

  isLoggedIn:Boolean;
  constructor() { }

  ngOnInit() {
    this.isLoggedIn=LoginService.loggedIn;
    console.log("Logged in? ", LoginService.loggedIn)
  }

}
