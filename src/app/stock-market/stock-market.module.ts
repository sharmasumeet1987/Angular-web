import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockMarketRoutingModule } from './stock-market-routing.module';
import { StockComponent } from './stock/stock.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [StockComponent],
    imports: [CommonModule, StockMarketRoutingModule, SharedModule],
})
export class StockMarketModule {}
