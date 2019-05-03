import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { Certificate } from '../../../shared/models';
@Component({
  selector: 'app-view-certificate',
  templateUrl: './view-certificate.component.html',
  styleUrls: ['./view-certificate.component.scss']
})
export class ViewCertificateComponent implements OnInit {


  public queryCertForm:FormGroup;
  public seatNo:any;
  public Newcertificate: Certificate = new Certificate({});





  constructor(
    private httpClient: HttpClient,
    private _fb: FormBuilder
  ) { }

  ngOnInit() {

    this.queryCertForm=this._fb.group({
      seatNo:null
    })
  }


  queryCert() {
    console.log("jdbad");
    this.httpClient.get(`http://localhost:8000/certificates/${this.queryCertForm.get('seatNo').value}`).subscribe(res => {
      this.Newcertificate = new Certificate(res);

    });

  }
}
