import { RESTDataSource } from "apollo-datasource-rest";

class CatsDS extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.thecatapi.com/v1";
  }

  /** middleware */
  willSendRequest(request) {
    request.headers.set(
      "Authorization",
      this.context.fullHeaders["authorization"]
    );
    /** set new headers */
    request.headers.set("s_token", this.context.fullHeaders["authorization"]);
  }

  async imagesSearch() {
    return this.get("/images/search");
  }
}

export default CatsDS;

/**
  DOC: https://github.com/apollographql/apollo-server/tree/main/packages/apollo-datasource-rest

   https://documenter.getpostman.com/view/5578104/RWgqUxxh#98619788-d2a5-4299-aa35-104a2e770b7a
   
*/
