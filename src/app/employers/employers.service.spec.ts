import { async, TestBed, inject } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

import { EmployersService } from './employers.service';
import { HttpTestingController } from '@angular/common/http/testing';
import { environment } from '../../environments/environment';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthService } from '../shared/index';
import { HttpModule } from '@angular/http';
import { AuthServiceSpy } from '../shared/testing';

describe('EmployersService', async() => {
  let service: EmployersService;
  let httpMock: HttpTestingController;
  let baseref: string  = environment.dataUrl;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      providers: [
        EmployersService,
        { provide: AuthService, useClass: AuthServiceSpy },
        HttpClient],
      imports: [
        HttpModule,
        HttpClientTestingModule
      ]
    });
    service = TestBed.get(EmployersService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
