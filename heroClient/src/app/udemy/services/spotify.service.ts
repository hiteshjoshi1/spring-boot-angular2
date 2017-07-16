import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, RequestOptions,Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SpotifyService {
   private url = "https://jsonplaceholder.typicode.com/users?username=";
constructor(private _http: Http) { }

getArtists(searchStr: string): Observable<any>{
  console.log(searchStr);


    return this._http.get(this.url+searchStr).map(response => {
      console.log(response.json());
      return response.json();
    });
  //   {
  //    console.log(response.json());
  //   return response.json();
  // }

}

   getHeroes(searchStr: string): Observable<any> {
    const sUrl = this.url + searchStr;
    console.log(sUrl);
    return this._http.get(sUrl)
                    .map(res =>   res.json()|| { }
                      );
  }




  private extractData(res: Response) {
    let body = res.json();
    console.log(body);
    return body || { };
  }


private handleError (error: Response | any) {
      // In a real world app, you might use a remote logging infrastructure
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
