import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FarmerService} from './service/farmer.service';
import {FarmerSearchCardModule} from './component/farmer-search-card/farmer-search-card.module';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    // Components
    FarmerSearchCardModule,

    // GraphQL and HTTP
    GraphQLModule, HttpClientModule
  ],
  providers: [
    FarmerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
