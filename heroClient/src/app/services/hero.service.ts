import { Injectable } from '@angular/core';
import { Hero } from './../models/hero';
// import { HEROES } from './mock-heroes';
import { Http,Response,URLSearchParams,RequestOptions,Headers }    from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class HeroService {
    private heroesUrl = 'http://localhost:2222/heroes';

    constructor(private http : Http) { }

   getHeroes(): Observable<Hero[]> {
    return this.http.get(this.heroesUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }




  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }

  private extractAHero(res: Response) {
    let body = res.json();
    return body[0] || { };
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


//   getHeroesSlowly(): Promise<Hero[]> {
//   return new Promise(resolve => {
//     // Simulate server latency with 2 second delay
//     setTimeout(() => resolve(this.getHeroes()), 2000);
//   });
// }


getHero(id: number): Observable<Hero> {
  let params: URLSearchParams = new URLSearchParams();
  params.set('heroId',id.toString());

  return this.http.get(this.heroesUrl,{search: params})
    .map(this.extractAHero)
    .catch(this.handleError);
}

update(hero: Hero): Observable<Hero> {
  let headers = new Headers({ 'Content-Type': 'application/json' });
  let options = new RequestOptions({ headers: headers });
  return this.http
    .put(this.heroesUrl,JSON.stringify(hero),options)
    .map(res => res.json())
    .catch(this.handleError);
}

create(name: string): Observable<Hero> {
  let headers = new Headers({ 'Content-Type': 'application/json' });
  let options = new RequestOptions({ headers: headers });
  return this.http
    .post(this.heroesUrl, JSON.stringify({name: name}),options)
    .map(res => res.json() as Hero)
    .catch(this.handleError);
}

delete(id: number): Observable<any> {
  console.log(id.toString());
  let headers = new Headers({ 'Content-Type': 'application/json' });
  let options = new RequestOptions({ headers: headers });
  
  let url  = this.heroesUrl+'/'+id.toString();
  return this.http.delete(url,headers
    )
    .map(() =>null)
    .catch(this.handleError);
}

}
