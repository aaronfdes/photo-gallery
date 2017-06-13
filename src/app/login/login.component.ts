import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
    selector: 'login',
    templateUrl: './login.component.html'
})
export class LoginComponent {

    username: string;
    password: string;
    showError: boolean = false;

    constructor(public authService: AuthService, public router: Router) { }

    login() {
        this.showError = false;
        this.authService.login(this.username, this.password).subscribe((response) => {
            this.authService.isLoggedIn = response;
            if (this.authService.isLoggedIn) {
                this.router.navigate([this.authService.redirectUrl ? this.authService.redirectUrl : '']);
            } else {
                this.showError = true;
            }
        });
    }

    logout() {
        this.authService.logout();
        this.router.navigate([""]);
    }
}
