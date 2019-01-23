"use strict"
import request from 'request';

class WarcraftLogsRequest {

  constructor() {
    // Straight from env for the moment.
    this.privateKey = process.env.WARCRAFTLOGS_PRIVATE_KEY
    this.publicKey = process.env.WARCRAFTLOGS_PUBLIC_KEY
    this.version = process.env.API_VERSION
  }

  // // // // // // // 
  // Parameter Building
  // // // // // // // 

  publicKeyParam(){
    return `api_key=${this.publicKey}`
  }

  // // // // // // //
  // URL Construction 
  // // // // // // //

  baseUrl(){
    return `https://www.warcraftlogs.com:443/${this.version}`
  }

  zoneUrl(){
    return `${this.baseUrl()}/zones?${this.publicKeyParam()}`
  }

  classUrl(){
    return `${this.baseUrl()}/classes?${this.publicKeyParam()}`
  }

  // // // // // // // //
  // Data Retrieval
  // // // // // // // //
  
  getZones(next){
    request(this.zoneUrl(), (error, reponse, body) => {
      next(body)
    })
  }

  getClasses(next){
    request(this.classUrl(), (error, reponse, body) => {
      next(body)
    })
  }

}

export { WarcraftLogsRequest as default}