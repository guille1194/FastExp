import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { AuthService } from './auth.service';
import { UtilitiesService } from './utilities.service';
import { API_GET_PATIENT } from '../config/url.servicios';
import { Patient } from '../models/patient.model';

import 'rxjs/add/operator/map';

@Injectable()
export class PacientesService {
  patient: Patient;


  constructor(public http: Http,
              private authService: AuthService,
              private utilitiesService: UtilitiesService) {
    console.log('Hello PacientesProvider Provider');
  }

  getPatients(): Observable<Patient[]> {
    let url = API_GET_PATIENT ;
    let options = this.authService.getRequestOptions();

    return this.http.get(url, options)
      .map(res => {
        let data = this.utilitiesService.extractDataFromJSON(res);
        return data.patients;
      });
  }

}
