import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import {
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatListModule,
} from '@angular/material';
import { SearchComponent } from './search/search.component';

@NgModule({
    declarations: [SearchComponent],
    imports: [CommonModule, SharedRoutingModule],
    exports: [
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule,
        MatProgressSpinnerModule,
        MatSidenavModule,
        MatListModule,
        MatButtonModule,
    ],
})
export class SharedModule {}
