
import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {Http, Headers, Request, RequestMethod, RequestOptions} from '@angular/http';


import { Report } from './models/report';
import { SearchOptions } from './models/search-options';
import {Observable} from 'rxjs';
import {SimpleAggregateRow} from './models/simple-aggregate-row';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ReportsService {
  constructor(private http: HttpClient) {}
  getReportData(reportName: string, o: SearchOptions): Observable<any[]> {
    // TODO throw exception if report is not populated
    const params = this.encodeData(o);
    let uri = environment.dataUrl + '/api/reports';
    if (reportName) {
      uri = uri + '/' + reportName;
    }
    if (reportName && params) {
      uri = uri + '?' + params;
    }
    console.log('getReportData: ' + uri);
    return this.http.get(uri).pipe(
              map(res => res['data'] as any));
  }

  public getReportList(): Observable<Report[]> {
    let uri = environment.dataUrl + '/api/reports';
    console.log('getReportList: ', uri);
    return this.http.get(uri).pipe(
      map(o => o['data'] as Report[]));
  }

  public encodeData(data: any): string {
    return Object.keys(data).map((key) => {
      return [key, data[key]].map(encodeURIComponent).join('=');
    }).join('&');
  }
}

