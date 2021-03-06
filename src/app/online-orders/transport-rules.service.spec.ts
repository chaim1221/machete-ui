import { TestBed, inject } from '@angular/core/testing';

import { TransportRulesService } from './transport-rules.service';
import { HttpModule } from '@angular/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpTestingController } from '@angular/common/http/testing';
import { environment } from '../../environments/environment';

describe('TransportRulesService', () => {
  let httpMock: HttpTestingController;
  let baseref: string  = environment.dataUrl;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TransportRulesService        
      ],
      imports: [
        HttpModule,
        HttpClientTestingModule        
      ]
    }).compileComponents();
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', inject([TransportRulesService], (service: TransportRulesService) => {
    expect(service).toBeTruthy();
  }));
});
