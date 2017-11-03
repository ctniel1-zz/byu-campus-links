import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CampusLinksService {

  private url = './campus-links.json';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  load() {
    return this.http.get(this.url)
      .map(res =>res.json());
  }

  // save(name: string) {
  //
  // }

  update(name: string) {
    let options = new RequestOptions({headers: this.headers});

    return this.http.put(this.url, {name}, options)
      .map(res => res.json());
  }
}
