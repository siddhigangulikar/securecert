import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateTempComponent } from './certificate-temp.component';

describe('CertificateTempComponent', () => {
  let component: CertificateTempComponent;
  let fixture: ComponentFixture<CertificateTempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificateTempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificateTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
