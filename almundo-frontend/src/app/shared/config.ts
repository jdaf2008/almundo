export class Config {

    // ************************************ Backend Information ************************************

    static API_URL_BASE = "http://localhost:3789/api/almundo";
    static API_URL_PARAMETER = "/hotels";
    static API_STATUS_OK = "ok";
    static API_STATUS_REJECTED = "rejected";
    static API_STATUS_NO_DATA = 'nodata';

    // Services Name
    static NAME_SERVICE_GET_PARAMETERS =  "getHotels";
    
    // Services Options
    static SERVICES_TIMEOUT = 5000;
    static METHOD_NAME_POST = "post";
    static METHOD_NAME_GET = "get";
    static METHOD_NAME_DELETE = "delete";
    static METHOD_NAME_PUT = "put";
    static STORAGE_NO_DATA ='{"status" : "' + Config.API_STATUS_NO_DATA + '"}';


    //Messages
   static TIME_ERROR_MESSAGE = "Timeout requests";
   static GENERAL_ERROR_MESSAGE = "Something failed";
   static GENERAL_OK_MESSAGE = "Data was collected correctly";

  
  }
