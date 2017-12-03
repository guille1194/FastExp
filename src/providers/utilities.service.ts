import { Response } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UtilitiesService {

    public extractDataFromJSON(res: Response) {
        let body = JSON.parse(res['_body']);
        return body || null;
    }
}
