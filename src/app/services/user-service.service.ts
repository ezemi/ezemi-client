import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Status } from '../Models/status';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpclient:HttpClient) { }

  getUserById(userId:number):Observable<User>{
    return this.httpclient.get<User>("http://localhost:9090/getuserbyid?userId="+userId);
  }

  activateCard(userId:number):Observable<Status>{
    return this.httpclient.get<Status>("http://localhost:9090/activatecard?userId="+userId);
  }
}
