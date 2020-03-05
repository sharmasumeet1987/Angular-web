import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    MatSpinner,
    MatProgressSpinner,
    MatProgressSpinnerModule,
} from '@angular/material';
import { AccountListComponent } from './account-list/account-list.component';
import { AccountCreateComponent } from './account-create/account-create.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactCreateComponent } from './contact-create/contact-create.component';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { ActivityCreateComponent } from './activity-create/activity-create.component';
import { HttpClientModule } from '@angular/common/http';
import { NewsComponent } from './news/news.component';
import { StockComponent } from './stock-market/stock/stock.component';
import { SharedModule } from './shared/shared.module';
import { StockMarketModule } from './stock-market/stock-market.module';

const routes: Routes = [
    {
        path: 'accounts',
        component: AccountListComponent,
    },
    {
        path: 'create-account',
        component: AccountCreateComponent,
    },
    {
        path: 'contacts',
        component: ContactListComponent,
    },
    {
        path: 'create-contact',
        component: ContactCreateComponent,
    },
    {
        path: 'activities',
        component: ActivityListComponent,
    },
    {
        path: 'create-activity',
        component: ActivityCreateComponent,
    },
    {
        path: 'news',
        component: NewsComponent,
    },
];
@NgModule({
    declarations: [
        AppComponent,
        AccountListComponent,
        AccountCreateComponent,
        ContactListComponent,
        ContactCreateComponent,
        ActivityListComponent,
        ActivityCreateComponent,
        NewsComponent,
    ],
    imports: [
        RouterModule.forRoot(routes),
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        SharedModule,
        StockMarketModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
