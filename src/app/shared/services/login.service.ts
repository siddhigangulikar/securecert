import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  static type: Number
  static loggedIn: Boolean = false
  httpClient: any;
  queryCertForm: any;
  Newcertificate: any;

  constructor(
    private _http: HttpClient,
    private router: Router
    

  ) { }

  login(body: any, type: number) {
    localStorage.setItem("type", type + "");
   
  //  this.router.navigate(["dashboard"]);
   
    this._http.post("http://localhost:8000/Login", {
     username: body.username,
      password: body.password
     }).subscribe(res => {
      console.log(res);
if(res=="success"){
   this.router.navigate(["dashboard"]);
}else{
  alert("Wrong credentials,Please try again!! ");
}
    })
  }


}

