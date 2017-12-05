import { Injectable } from "@angular/core";
import { Headers, RequestOptions } from "@angular/http";
import { AppConstants } from "../config/app.config";


@Injectable()
export class AuthService {
    constructor() {}

    getRequestOptions() {
        let headers = new Headers();

        headers.append('Content-Type', 'application/json');
        headers.append('API_KEY', AppConstants.API_KEY);

        let session = localStorage.getItem('currentSession');

        if (session) {
            let data = JSON.parse(session);
            if (data.token) {
                headers.append('USER_TOKEN', data.token);
            }
        }
        console.log(session);
        return new RequestOptions({ headers: headers });
    }

    logout() {
        localStorage.removeItem('currentSession');
    }
}
