import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Address } from '../Models/address';
import { Order } from '../Models/order';
import { OrderDto } from '../Models/order-dto';
import { Status } from '../Models/status';
import { Transaction } from '../Models/transaction';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  constructor(private httpclient: HttpClient) {}

  getUserById(userId: number): Observable<User> {
    return this.httpclient.get<User>(
      'http://localhost:9090/getuserbyid?userId=' + userId
    );
  }

  activateCard(userId: number): Observable<Status> {
    return this.httpclient.get<Status>(
      'http://localhost:9090/activatecard?userId=' + userId
    );
  }

  getAddressByUserId(userId: number): Observable<Address> {
    return this.httpclient.get<Address>(
      'http://localhost:9090/getAddressByUserId?userId=' + userId
    );
  }

  updateAddress(userId: number, address: Address): Observable<Status> {
    return this.httpclient.put<Status>(
      'http://localhost:9090/updateAddress?userId=' + userId,
      address
    );
  }

  makeAnOrder(orderDto: OrderDto): Observable<Status> {
    return this.httpclient.post<Status>(
      'http://localhost:9090/confirmorder',
      orderDto
    );
  }

  getPaidOrders(userId: number): Observable<Order[]> {
    return this.httpclient.get<Order[]>(
      'http://localhost:9090/getPaidOrdersByUserId?userId=' + userId
    );
  }

  getUnPaidOrders(userId: number): Observable<Order[]> {
    return this.httpclient.get<Order[]>(
      'http://localhost:9090/getUnPaidOrdersByUserId?userId=' + userId
    );
  }

  getTransactionByUserId(userId: number): Observable<Transaction[]> {
    return this.httpclient.get<Transaction[]>(
      'http://localhost:9090/transactionsbyuserid?userId=' + userId
    );
  }

  payEmi(orderId: number) {
    return this.httpclient.get(
      'http://localhost:9090/payemi?orderId=' + orderId
    );
  }

  getOtpforpayment(email: string) {
    return this.httpclient.get(
      'http://localhost:9090/getotpforpayment?emailId=' + email,
      { responseType: 'text' }
    );
  }
}
