import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUserResponse } from '../modules/user'

@Injectable({
  providedIn: 'root'
})
export class UserManagerService {
  constructor(private http: HttpClient) {}

  getRandomName(): Observable<IUserResponse> {
    return this.http.get<IUserResponse>('https://randomuser.me/api/');
  }

}
