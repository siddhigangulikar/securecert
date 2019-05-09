import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { LoginService } from 'src/app/shared/services/login.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public type: string;

  constructor(
    private formBuilder: FormBuilder,
    private _loginService: LoginService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params.type == "university") {
        LoginService.type=0;
        LoginService.loggedIn=true;
        this.type = "University";
      } else if (params.type == "creator") {
        LoginService.type=1;
        LoginService.loggedIn=true;
        this.type = "Creator";
      }
      else {
        LoginService.type=2;
        LoginService.loggedIn=true;
        this.type = "Student";
      }
    })
  }
  ngOnInit() {
    this.buildForm();
  }



  buildForm() {
    this.loginForm = this.formBuilder.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required, Validators.minLength(8)]]
    });
  }

  loginClicked() {
    let data = 0;
    if(this.type=="Creator")
    {
      data=1;

    }
    else if(this.type=="Student")
    {
      data=2;
    }
    this._loginService.login(this.loginForm.value,data);
  }
}

