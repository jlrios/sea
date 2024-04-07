import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  SEAUrlApp: string;
  SEAUrlApi: string;

  constructor(private http: HttpClient) {
    this.SEAUrlApp = environment.endpoint;
    this.SEAUrlApi = '/api/User';
  }

  // -- POST --
  // http://localhost:29259/api/User
  saveUser(user: User): Observable<any> {
    return this.http.post(this.SEAUrlApp + this.SEAUrlApi, user);
  }

  changePassword(changePassword: any): Observable<any> {
    return this.http.put(this.SEAUrlApp + this.SEAUrlApi + '/ChangePassword', changePassword);
  }
}