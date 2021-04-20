import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bank } from '../Models/bank';
import { LoginStatus } from '../Models/login-status';
import { LoginUser } from '../Models/login-user';
import { Status } from '../Models/status';
import { UserRegDto } from '../Models/userRegDto';

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

  getAllBanks(): Observable<Bank[]> {
    return this.httpClient.get<Bank[]>('http://localhost:9090/getallbanks');
  }

  registerUser(fd: FormData): Observable<Status> {
    return this.httpClient.post<Status>('http://localhost:9090/register', fd);
  }

  loginUser(logindto: LoginUser): Observable<LoginStatus> {
    return this.httpClient.post<LoginStatus>(
      'http://localhost:9090/login',
      logindto
    );
  }

  loggedIn(): boolean {
    return !!localStorage.getItem('loggedinuser');
  }
}
