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

    constructor(public authService: AuthService, public router: Router) { }

    login() {
        this.authService.login(this.username, this.password).subscribe(() => {

            if (this.authService.isLoggedIn) {
                // Get the redirect URL from our auth service
                // If no redirect has been set, use the default
                let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '';
                // Redirect the user
                this.router.navigate([redirect]);
            }
        });
    }
    logout() {
        this.authService.logout();
        this.router.navigate([""]);
    }
}
