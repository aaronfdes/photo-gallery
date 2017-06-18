import { Injectable } from '@angular/core';
import { HttpService } from './common/http.service';

@Injectable()
export class AuthService {
  isLoggedIn: boolean = false;
  jwt:string;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor(private _httpService: HttpService) { }

  login(username: string, password: string) {
    return this._httpService.post("login", { username: username, password: password });
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
