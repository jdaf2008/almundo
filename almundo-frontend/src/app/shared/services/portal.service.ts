import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpResponse, HttpParams, HttpUrlEncodingCodec } from "@angular/common/http";
import { Observable as RxObservable } from "rxjs";
import { map, timeout } from 'rxjs/operators';
import { Config } from '../config';


@Injectable()
export class PortalService {

    constructor(private http: HttpClient) {}

    httpGeneralRequest(token, SERVE_URL, data, method, condition) {

        console.info("portalservice_httpGeneralRequest start");
  
        switch (method) {

            case Config.METHOD_NAME_GET:
                console.info("portal.service_httpGeneralRequest Method GET");

                return this.http.get(SERVE_URL, this.createRequestOptions(condition)).pipe(
                    timeout(Config.SERVICES_TIMEOUT),
                    map((res) => res),);


            case Config.METHOD_NAME_POST:
                console.info("portal.service_httpGeneralRequest Method POST");

                return this.http.post(SERVE_URL, data , this.createRequestOptions(condition)).pipe(
                    timeout(Config.SERVICES_TIMEOUT),
                    map((res) => res),);

            case Config.METHOD_NAME_DELETE:
                console.info("portal.service_httpGeneralRequest Method DELETE");

                return this.http.delete(SERVE_URL, this.createRequestOptions(condition)).pipe(
                    timeout(Config.SERVICES_TIMEOUT),
                    map((res) => res),);

            case Config.METHOD_NAME_PUT:
                console.info("portal.service_httpGeneralRequest Method PUT");

                return this.http.put(SERVE_URL, this.createRequestOptions(condition)).pipe(
                    timeout(Config.SERVICES_TIMEOUT),
                    map((res) => res),);

            default:
                console.info("portal.service_httpGeneralRequest Option not valid");

        }

    }

    handleErrors(error: Response ) {
        console.info("portal.service_handleErrors error: " + error.json());

        return RxObservable.throw(error);
    }

    // ------------------------------------------- Request Methods ---------------------------------------------

    createRequestOptions(condition) {

        
        
        const headers = new HttpHeaders().set('Content-Type', 'application/json');

       if (condition) {

        console.log("create options => condition" + JSON.stringify(condition));
        const options = {headers: headers, params: condition};
        return options;

       } else {

        const options = {headers: headers};
        return options;

       }

    }

}
