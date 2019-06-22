import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  apiKey = `4d6447013a3845ada3fd42c8ecf74bd7`;
  constructor(private http: HttpClient) {}
  getData(country) {
    return this.http.get('https://newsapi.org/v2/top-headlines?' + `country=${country}` + `&apiKey=${this.apiKey}` );
  }
}
