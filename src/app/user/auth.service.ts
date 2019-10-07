import { Injectable } from '@angular/core';
import { IUser } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  currentUser: IUser;
  loginUser(userName: string, password: string) {
    this.currentUser = {
      id: 1,
      userName: userName,
      firstName: 'Disah',
      lastName: 'Kgtehi'
    };
  }

  isAuthinticated() {
    return !!this.currentUser;
  }
}
