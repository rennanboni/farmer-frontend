import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FarmerService} from './service/farmer.service';
import {FarmerSearchCardModule} from './component/farmer-search-card/farmer-search-card.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    // Components
    FarmerSearchCardModule
  ],
  providers: [
    FarmerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
