import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-create-certificate',
  templateUrl: './create-certificate.component.html',
  styleUrls: ['./create-certificate.component.scss'],


})



export class CreateCertificateComponent implements OnInit {

  public recordCertForm: FormGroup;
  public transferCertForm:FormGroup;
  public firstName:any;
  public cert_PRno: any;
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
      cert_PRno: [null,[Validators.required, Validators.minLength(9),Validators.maxLength(11)]],
      cert_CName: [null,Validators.required],
      cert_Seatno: [null,[Validators.required, Validators.minLength(5),Validators.maxLength(7)]],
      cert_examination: [null,Validators.required],
      cert_YOP: [null,[Validators.required, Validators.maxLength(4)]],
      cert_sububject: [null,[Validators.required, Validators.maxLength(3)]],
    });

    this.transferCertForm=this.fb.group({
      cert_Seatno:[null,[Validators.required,Validators.minLength(4)]],
      firstName:[null,Validators.required],
    })
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

  this.httpClient.post(`http://localhost:8000/addNewCertificate`, this.recordCertForm.value).subscribe((data: string) => {
           console.log(data);       }
      )
    this.recordCertForm.reset();
    };

   transferCert() {

     this.httpClient.post(`http://localhost:8000/transfer_cert/${this.transferCertForm.get('cert_Seatno').value}/transferName`, this.transferCertForm.value).subscribe((data: any) => {
   console.log(data);
   
       //this.transferCertForm.reset();
     });
  }
}
