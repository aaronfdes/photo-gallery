import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  isLoggedIn: boolean = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(username: string, password: string): Observable<boolean> {
    //make api call and check this 
    if (username == "a" && password == "a") {
      this.isLoggedIn = true;
    }
    return Observable.of(true);
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
