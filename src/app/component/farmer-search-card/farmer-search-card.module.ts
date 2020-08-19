import {NgModule} from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {FlexLayoutModule} from '@angular/flex-layout';

import {MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule} from '@angular/material';

import {FarmerSearchCardComponent} from './farmer-search-card.component';

@NgModule({
  declarations: [
    FarmerSearchCardComponent
  ],
  providers: [],
  exports: [
    FarmerSearchCardComponent
  ],
  imports: [
    // Core
    BrowserModule,
    BrowserAnimationsModule,

    // Flex
    FlexLayoutModule,

    // Angular Material
    MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule
  ],
})
export class FarmerSearchCardModule {
}
