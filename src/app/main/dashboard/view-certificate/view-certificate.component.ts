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


//public queryCertForm:FormGroup;
public seatNo:any;
public Newcertificate: Certificate = new Certificate({});
public all_cert: Certificate[] = [];

public sub1:any;
public sub2:any;
public sub3:any;
public sub4:any;
public sub5:any
public sub6:any;
public total:number;
public username=localStorage.getItem('username')



  constructor(
    private httpClient: HttpClient,
    private _fb: FormBuilder
  ) { }

  ngOnInit() {
this.queryStudentCert();
    /*this.queryCertForm=this._fb.group({
      seatNo:null
    })*/
  }
  queryStudentCert() {
    console.log(this.username);
    this.httpClient.get(`http://localhost:8000/getStudentCert/${this.username}`).subscribe(res => {
     
      console.log(res);
     // this.all_cert = res.map(cert => new Certificate(cert));
     this.all_cert = res.map(cert => new Certificate(cert));
      // this.Newcertificate.sub.split('"')
  
  });
    }

  queryCert(sNo :any) {
 


      this.httpClient.get(`http://localhost:8000/get_cert/${sNo}`).subscribe(res => {
        this.Newcertificate = new Certificate(res);
           console.log(this.Newcertificate.sub)
           console.log( this.Newcertificate.sub.split('"'));
           // this.Newcertificate.sub.split('"')
           this.sub1=this.Newcertificate.sub.split('"')[3];
           this.sub2=this.Newcertificate.sub.split('"')[7];
           this.sub3=this.Newcertificate.sub.split('"')[11];
           this.sub4=this.Newcertificate.sub.split('"')[15];
           this.sub5=this.Newcertificate.sub.split('"')[19];
           this.sub6=this.Newcertificate.sub.split('"')[23];
           this.total=Number(this.sub1)+Number(this.sub2)+Number(this.sub3)+Number(this.sub4)+Number(this.sub5)+Number(this.sub6);
    });
  }
}
