import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner/loading-spinner.component';

import { FilterPipe } from './Pipes/filter.pipe';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FooterComponent,
    NavComponent,
    PageNotFoundComponent,
    FilterPipe,
    LoadingSpinnerComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    FooterComponent,
    NavComponent,
    PageNotFoundComponent,
    FilterPipe,
    LoadingSpinnerComponent,
    CommonModule
  ]
})
export class SharedModule { }
