import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    API_KEY = 'YOUR_API_KEY';
    constructor(private httpClient: HttpClient) {}

    getNews(): Observable<any> {
        return this.httpClient.get(
            `https://newsapi.org/v2/top-headlines?country=in&apiKey=${this.API_KEY}`,
        );
    }
    getStockSymbols(): Observable<any> {
        let filepath = 'assets/stock-symbols.json';
        return this.httpClient.get(filepath);
    }
}
