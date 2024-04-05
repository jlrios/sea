import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'; 
import { Observable } from 'rxjs';
import { User } from '../models/user';

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
    localStorage.setItem('userName', data);
  }

  getUserName(): string {
    return JSON.parse(localStorage.getItem('userName') || '{}');
  }

  removeLocalStorage(): void {
    localStorage.removeItem('userName');
  }
}
