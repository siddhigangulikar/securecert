import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private _http: HttpClient
  ) { }

  login(body: any) {
    this._http.post(environment.apiUrl + "/login", {
      username: body.username,
      password: body.password
    }).subscribe(res => {
      console.log(res);

    })
  }


}

