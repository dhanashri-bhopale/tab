import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabNgIfComponent } from './tab-ng-if/tab-ng-if.component';
import { TabNgForComponent } from './tab-ng-for/tab-ng-for.component';

@NgModule({
  declarations: [
    AppComponent,
    TabNgIfComponent,
    TabNgForComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
