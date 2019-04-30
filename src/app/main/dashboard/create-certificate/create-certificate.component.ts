import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';


@Component({
  selector: 'app-create-certificate',
  templateUrl: './create-certificate.component.html',
  styleUrls: ['./create-certificate.component.scss'],


})



export class CreateCertificateComponent implements OnInit {

  public recordCertForm: FormGroup;
  
  public PRno: any;
  public cert_CName: any;
  public cert_Seatno: any;
  public cert_examination: any;
  public cert_YOP: any;
  public cert_sububject: any;
  public data: string;
  /*
  recordForm = this.fb.group({
    cert_PRno: [''],
    cert_CName: [''],
    cert_Seatno: [''],
    cert_examination: [''],
    cert_YOP: [''],
    cert_sububject: ['']
  })*/
  constructor(
    private httpClient: HttpClient,
    private fb: FormBuilder
  ) { }

  ngOnInit() {

    this.recordCertForm = this.fb.group({
      cert_PRno: null,
      cert_CName: null,
      cert_Seatno: null,
      cert_examination: null,
      cert_YOP: null,
      cert_sububject: null
    });
  }

  /*recordCert() {
    console.log("KKK");
  }*/

  /*
  recordCert() {
    this._httpClient.post(`http://localhost:8000/certificates`, this.recordForm.value).subscribe((data: any) => {
      console.log(data);
      this.recordForm.reset();
    });
  }
  */
  recordCert() {
    console.log(this.recordCertForm.value)

  this.httpClient.post(`http://localhost:8000/certificates`, this.recordCertForm.value).subscribe((data: string) => {
           console.log(data);       }
      )
    this.recordCertForm.reset();
    };

  // transferCertificate() {

  //   this.httpClient.post(`http://localhost:8000/certificates/${this.transferForm.get('seatNo').value}/transferName`, this.transferForm.value).subscribe((data: any) => {
  //     console.log(data);
  //   });
  // }
}
