import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { AppModel } from './app-model';
import { OrderModel } from './order-model';
@Injectable()
export class OdataService {
    public OdataListURL = "./assets/mock-data/clothes-mock.json";

    constructor(public http: Http) { }

    public getOdataList(id: number):Observable<AppModel>{
        return this.http.get(this.OdataListURL)
            .map((res: Response) => res.json())
    }
}