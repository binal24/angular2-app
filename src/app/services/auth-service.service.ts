import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, Request, RequestMethod } from '@angular/http';
import { AppSettings } from '../common/app-setting';
import { HttpHandler } from '../common/http.handler';
import { Router } from '@angular/router';

@Injectable()
export class AuthServiceService {
    private isloggedIn = false;
    constructor(private http: Http, private httpHandler: HttpHandler, private router: Router, ) {
        this.isloggedIn = !!localStorage.getItem('auth_token');
    }
    login(email, password) {
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ headers: headers });
        let body = "username=" + email + "&password=" + password;
        return this.http
            .post(AppSettings.ENDPOINT + 'token', body, options)
            .map(res => res.json())
            .map((res) => {
                if (res) {
                    //localStorage.setItem('auth_token', res.access_token);
                    //localStorage.setItem('currentUser', JSON.stringify(res));
                    this.isloggedIn = true;
                }
                return res;
            });
    }
    logout() {
        //localStorage.removeItem('auth_token');
        //localStorage.removeItem('currentUser');
        this.isloggedIn = false;
        this.router.navigate(['login']);
    }
    isLoggedIn() {
        return this.isloggedIn;
    }
    getToken() {
        return JSON.parse(localStorage.getItem('currentUser')).auth_token;
    }
}
