import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-enroll-student',
  templateUrl: './enroll-student.component.html',
  styleUrls: ['./enroll-student.component.scss']
})
export class EnrollStudentComponent implements OnInit {

  /*declared variables and validations*/
  public enrollStudentForm: FormGroup;
  public cert_PRno: any;
  public firstName: any;
  public secondName: any;
  public surname: any;
  public collegeName: any;
  public branch: any;
  public YOP: any;
  public emailId: any;
  public mobileNumber: any;
  public data:string;

  constructor(private httpClient: HttpClient,
    private _fb: FormBuilder
  ) { }

  ngOnInit() {
    this.enrollStudentForm = this._fb.group({
      cert_PRno: null,
      firstName: null,
      secondName: null,
      surname:null,
      collegeName: null,
      branch: null,
      YOP: null,
      emailId:null,
      mobileNumber:null,

    });
  }
  enrollStudent() {

    console.log(this.enrollStudentForm.value);


    this.httpClient.post(`http://localhost:8000/`, this.enrollStudentForm.value).subscribe((data: any) => {
       console.log(data);
       this.enrollStudentForm.reset();
     }
     )
  }

  
}
