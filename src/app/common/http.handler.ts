import { Injectable } from '@angular/core';
import { Http, Headers, Request, RequestOptions, RequestOptionsArgs, Response, RequestMethod } from '@angular/http';
import { ErrorNotifierService } from './error.notifier';
import { Observable } from 'rxjs/Rx';
import { AppSettings } from './app-setting'
import { ResponseModel } from '../models/response.model'

@Injectable()
export class HttpHandler {
    private loggedIn = false;
    constructor(private http: Http) {
        this.loggedIn = !!localStorage.getItem('auth_token');
    }
    post(url: string, data: any): Observable<any> {
        let body = JSON.stringify(data);
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('auth_token')
        });
        let authe = new RequestOptions({
            method: RequestMethod.Post,
            url: AppSettings.API_ENDPOINT + url,
            headers: headers,
            body: body
        });
        return this.http.request(new Request(authe))
            .map((res: Response) => {
                if (res) {
                    return [{ status: res.status, json: res.json() }]
                }
            })
            .catch((err: any): any => {
                console.log(JSON.stringify(err))
                return Observable.empty();
            })
    }
    getById(url: string, data: any): Observable<any> {
        let body = JSON.stringify(data);
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('auth_token')
        });
        let authe = new RequestOptions({
            method: RequestMethod.Get,
            url: AppSettings.API_ENDPOINT + url,
            headers: headers,
            body: JSON.stringify(body)
        });
        return this.http.request(new Request(authe))
            .map((res) => {
                let response: ResponseModel = <ResponseModel>res.json()
                return response;
            })
            .catch((err: any): any => {
                console.log(JSON.stringify(err))
                return Observable.empty();
            })
    }
    getListFromOdata(url: string, data: any): Observable<any> {
        let body = JSON.stringify(data);
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('auth_token')
        });
        let authe = new RequestOptions({
            method: RequestMethod.Get,
            url: AppSettings.ENDPOINT+'odata/' + url,
            headers: headers,
            body: body
        });
        return this.http.request(new Request(authe))
            .map((res) => {
                let response: ResponseModel = <ResponseModel>res.json()
                return response;
            })
            .catch((err: any): any => {
                console.log(JSON.stringify(err))
                return Observable.empty();
            })
    }
}