import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  private url = 'https://swapi.co/api';
  /** Headers @private 
 * @memberof GeneralService
 * @description this variable represents the headers of the aplication
 */
  private headers = new Headers({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
  });
  constructor(
    private http: Http
  ) { }
  
  getRequest(parametros: any, path: string = ""): Promise<any[]> {
    return this.http.get(this.url + path)//, { headers: this.headers })
      .toPromise()
      .then(response => {
        return response.json() as any[]
      })
      .catch(error => {
        console.log("error Response Data: " + error)
        let problem = []
        return problem;

      });
  }

  getNoUrlRequest(parametros: any, path: string = ""): Promise<any[]> {
    return this.http.get(path)//, { headers: this.headers })
      .toPromise()
      .then(response => {
        return response.json() as any[]
      })
      .catch(error => {
        console.log("error Response Data: " + error)
        let problem = []
        return problem;

      });
  }
}

