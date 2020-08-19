import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {FlexLayoutModule} from '@angular/flex-layout';

import {MatAutocompleteModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule} from '@angular/material';

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
    // Forms
    FormsModule, ReactiveFormsModule,

    // Flex
    FlexLayoutModule,

    // Angular Material
    MatAutocompleteModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule,
  ],
})
export class FarmerSearchCardModule {
}
