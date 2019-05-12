import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { Certificate } from '../../../shared/models';
@Component({
  selector: 'app-certificate-template',
  templateUrl: './certificate-template.component.html',
  styleUrls: ['./certificate-template.component.scss']
})
export class CertificateTemplateComponent implements OnInit {

  public queryCertForm: FormGroup;
  public seatNo: any;
  public Newcertificate: Certificate = new Certificate({});




  constructor( private httpClient: HttpClient,
    private _fb: FormBuilder) { }

  ngOnInit() {
    this.queryCertForm = this._fb.group({
      seatNo: null
    })
  }



  queryCert() {
 


    this.httpClient.get(`http://localhost:8000/get_cert/${this.queryCertForm.get('seatNo').value}`, this.queryCertForm.value).subscribe(res => {
      this.Newcertificate = new Certificate(res);

  });

}
}