import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { environment } from '../environments/environment';
import { Email } from './email';


@Injectable()
export class BackendService {

  constructor(private http: Http) { }

  public sendEmail(email: Email): Observable<void> {
    return this.requestVoid('/partecipa', email.toJSON);
  }

  private requestVoid(url: string, data: {}, method: string = 'post'): Observable<void> {
    return this.http[method](`${environment.backend.url}${url}`, data)
               .map(response => {})
               .catch(this.handleError);
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
