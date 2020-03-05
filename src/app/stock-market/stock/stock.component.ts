import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
    selector: 'app-stock',
    templateUrl: './stock.component.html',
    styleUrls: ['./stock.component.css'],
})
export class StockComponent implements OnInit {
    constructor(private apiService: ApiService) {}
    stockSymbols: any;

    ngOnInit() {
        this.apiService.getStockSymbols().subscribe(data => {
            this.stockSymbols = data;
        });
    }
}
