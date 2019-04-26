import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-enroll-student',
  templateUrl: './enroll-student.component.html',
  styleUrls: ['./enroll-student.component.scss']
})
export class EnrollStudentComponent implements OnInit {

  /*declared variables and validations*/
  public queryForm: FormGroup;
  public cert_PRno: any;
  public firstName: any;
  public secondName: any;
  public surname: any;
  public collegeName: any;
  public branch: any;
  public YOP: any;
  public emailId: any;
  public mobileNumber: any;

  constructor(private httpClient: HttpClient,
    private _fb: FormBuilder
  ) { }

  ngOnInit() {
    this.queryForm = this._fb.group({

    })
  }
  enrollStudent() {
    console.log("KKK");
   /* this.httpClient.post(`http://localhost:3000/`, this.queryForm.value).subscribe((data: any) => {
      console.log(data);
      this.queryForm.reset();
    }
    )*/
  }

  clearData() {

  }

}
