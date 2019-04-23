import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private _http: HttpClient,
    private router: Router

  ) { }

  login(body: any, type: number) {
    localStorage.setItem("type", type + "");
   
    this.router.navigate(["dashboard"]);
    
    // this._http.post(environment.apiUrl + "/login", {
    //   username: body.username,
    //   password: body.password
    // }).subscribe(res => {
    //   console.log(res);

    // })
  }


}

