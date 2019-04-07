// Controller class is in charge of using services
import { Injectable, NgZone, ɵConsole } from "@angular/core";
import { Observable as RxObservable,  SubscriptionLike as ISubscription } from "rxjs";
import { Config } from "./config";
import { PortalService } from "./services/portal.service";
import { Hotel } from './models/hotel';



@Injectable()

export class Controller {
    serveUrl: string;
    data: string;

    private subscription: ISubscription;

    constructor(private portalService: PortalService,
                private zone: NgZone) {
        this.serveUrl = "";
        this.data = "";
    }

    // tslint:disable-next-line:max-line-length
    generalService(servicesName: string, hotelCondition: string, cbService, cbServiceError) {

                switch (servicesName) {

                    case Config.NAME_SERVICE_GET_PARAMETERS:
                        this.serveUrl = Config.API_URL_BASE + Config.API_URL_PARAMETER;
                        console.info("contr_generalservice Service get parameters");
                        // tslint:disable-next-line:max-line-length
                        this.handleHttpResponse(null, this.serveUrl, null, cbService, cbServiceError, Config.NAME_SERVICE_GET_PARAMETERS, Config.METHOD_NAME_GET,hotelCondition);
                        break;
                    default:
                        console.info("contr_generalservice Invalid option");
            }
    }

    // ------------------------------------------ General Methods -----------------------------------------------

    handleHttpResponse(token, serveUrl, data, cbService, cbServiceError, serviceName, method, condition) {
        this.subscription = this.portalService.httpGeneralRequest(token, serveUrl, data, method, condition)
        .subscribe((result) => {
            // console.info("contr_generalservice_handlehttp statuscode_ok in " + serviceName + ": " + result.message);
            cbService(result);
        }, (error) => {
            console.info("contr_generalservice_handlehttp statuscode_error in " + serviceName + ": " +  error);
            if (error.name === "TimeoutError") { cbServiceError(Config.TIME_ERROR_MESSAGE);
            } else { 
                console.log("error checking " + JSON.stringify(error));
                // cbServiceError(error.status != 200 ? (error._body.message ?  error._body.message : Config.GENERAL_ERROR_MESSAGE):Config.GENERAL_ERROR_MESSAGE); }
                cbServiceError(Config.GENERAL_ERROR_MESSAGE); }
            this.subscription.unsubscribe();
        });

    }
  

}
