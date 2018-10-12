import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchSelectModule } from './modules/search-select/search-select.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SearchSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
