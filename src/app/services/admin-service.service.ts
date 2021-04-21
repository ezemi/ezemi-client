import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bank } from '../Models/bank';
import { CardType } from '../Models/card-type';
import { Category } from '../Models/category';
import { ContactUs } from '../Models/contact-us';
import { Status } from '../Models/status';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root',
})
export class AdminServiceService {
  constructor(private httpClient: HttpClient) {}

  getallBanks(): Observable<Bank[]> {
    return this.httpClient.get<Bank[]>('http://localhost:9090/allbank');
  }

  addBank(bnk: Bank): Observable<Status> {
    return this.httpClient.post<Status>('http://localhost:9090/addbank', bnk);
  }

  approveUser(id: number): Observable<Status> {
    return this.httpClient.get<Status>(
      'http://localhost:9090/activateuser?userId=' + id
    );
  }

  getAllCardType(): Observable<CardType[]> {
    return this.httpClient.get<CardType[]>('http://localhost:9090/allcardtype');
  }

  getNotApprovedUser(): Observable<User[]> {
    return this.httpClient.get<User[]>(
      'http://localhost:9090/getnotapprovedusers'
    );
  }

  getApprovedUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(
      'http://localhost:9090/getapprovedusers'
    );
  }

  updateCategoryDetails(category : Category):Observable<Status>{
    return this.httpClient.post<Status>('http://localhost:9090/updatecategroydetails', category);
  }

  addCustomerQuery(query : ContactUs):Observable<Status>{
      return this.httpClient.post<Status>('http://localhost:9090/addcustomerquery', query);
  }
}
