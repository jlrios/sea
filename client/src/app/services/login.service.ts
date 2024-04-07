import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'; 
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  SEAUrlApp: string;
  SEAUrlApi: string;
 
  constructor(private http: HttpClient) {
    this.SEAUrlApp = environment.endpoint;
    this.SEAUrlApi = '/api/Login';  
  }

  login(user: User): Observable<any> {
    return this.http.post(this.SEAUrlApp + this.SEAUrlApi, user);
  }

  setLocalStorage(data: string): void {
    localStorage.setItem('token', data);
  }

  /*getUserName(): string {
    return localStorage.getItem('userName')!;
  }*/

  getTokenDecoded(): any {
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(localStorage.getItem('token')!);
    return decodedToken;
  }

  removeLocalStorage(): void {
    localStorage.removeItem('token');
  }
}
