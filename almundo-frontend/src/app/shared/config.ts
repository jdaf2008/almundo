export class Config {

    // ************************************ Backend Information ************************************

    static API_URL_BASE = "http://localhost:3789/api/";
    static API_URL_PARAMETER = "almundo/";
    static API_STATUS_OK = "ok";
    static API_STATUS_REJECTED = "rejected";
    static API_STATUS_NO_DATA = 'nodata';

    // Services Name
    static NAME_SERVICE_GET_PARAMETERS =  "getParameters";
    static NAME_SERVICE_GET_PUBLIC_DATA =  "getData";
    static NAME_SERVICE_POST_SYSTEM_DATA =  "postSystem";
    
    // Services Options
    static SERVICES_TIMEOUT = 5000;
    static METHOD_NAME_POST = "post";
    static METHOD_NAME_GET = "get";
    static METHOD_NAME_DELETE = "delete";
    static METHOD_NAME_PUT = "put";
    static STORAGE_NO_DATA ='{"status" : "' + Config.API_STATUS_NO_DATA + '"}';
  
  }
