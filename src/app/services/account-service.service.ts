import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AccountServiceService {
  constructor(private httpClient: HttpClient) {}

  getOtp(emailId: string): Observable<any> {
    return this.httpClient.get(
      'http://localhost:9090/getotp?emailId=' + emailId,
      { responseType: 'text' }
    );
  }
}
