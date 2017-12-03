import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import { URL_SERVICIOS } from '../config/url.servicios';
import {AuthService} from '../providers/auth.service';
import {UtilitiesService} from "../providers/utilities.service";
import 'rxjs/add/operator/map';

@Injectable()
export class UsuarioService {
    constructor(private http: Http,
                private authService: AuthService,
                private utilitiesService: UtilitiesService) {
    }

    signIn(userName: string, password: string) {
        let url = URL_SERVICIOS;

        let options = this.authService.getRequestOptions();

        let data = JSON.stringify({
            userName: userName,
            password: password
        });

        return this.http.post(url, data, options)
            .map(res => {
                let data = this.utilitiesService.extractDataFromJSON(res);
                localStorage.removeItem('currentSession');
                localStorage.setItem('currentSession', JSON.stringify({user: data.user, token: data.token}));

                return data;
            });
    }
}
