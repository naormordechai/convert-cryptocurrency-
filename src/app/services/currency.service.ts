import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private url = 'https://api.coinlayer.com/api/live?access_key=482a606c1c8ccf9e636db273ed4fb931';

  constructor(private http: HttpClient) { }

  public getRate(symbol: string, target: string): Observable<any> {
    return this.http.get(`${this.url}&symbols=${symbol}&target=${target}`);
  }

  public getCryptoNames(): Observable<any> {
    return this.http.get('https://apiv2.bitcoinaverage.com/info/indices/names');
  }

  public getCurrenciesNames(): Observable<any> {
    return this.http.get('https://openexchangerates.org/api/currencies.json');
  }
}
