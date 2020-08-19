import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {Farmer} from '../../model/Farmer';
import {FarmerSearchAbstractProvider} from './farmer-search-abstract.provider';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'farmer-search-card',
  templateUrl: './farmer-search-card.component.html',
  styleUrls: ['./farmer-search-card.component.scss']
})
export class FarmerSearchCardComponent implements OnInit {

  @Input()
  farmerSearchAbstractProvider: FarmerSearchAbstractProvider;

  // tslint:disable-next-line:no-output-on-prefix
  @Output()
  onPartnerSelectedEvent: EventEmitter<Farmer> = new EventEmitter<Farmer>();

  constructor() {
  }

  ngOnInit() {
    this.bla();
  }

  async bla() {
    console.log((await this.farmerSearchAbstractProvider.searchFarmers({input: '3'}))[0].name);
  }
}
