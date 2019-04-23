import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-create-certificate',
  templateUrl: './create-certificate.component.html',
  styleUrls: ['./create-certificate.component.scss']
})
export class CreateCertificateComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  public transferForm: FormGroup;
  public createCertificateForm: FormGroup;

  ngOnInit() {
  }
  // createNewCertificate() {

  //   this.httpClient.post(`http://localhost:5555/cert`, {})

  //     .subscribe(
  //       (data: any) => {
  //         console.log(data);
  //       }
  //     )
  // }

  // transferCertificate() {

  //   this.httpClient.post(`http://localhost:8000/certificates/${this.transferForm.get('seatNo').value}/transferName`, this.transferForm.value).subscribe((data: any) => {
  //     console.log(data);
  //   });
  // }
}
