import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete/typings/autocomplete';
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {debounceTime, map, startWith, switchMap, tap} from 'rxjs/operators';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Observable, of, Subject} from 'rxjs';

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

  form: FormGroup;
  values: Observable<Farmer[]>;
  selected: Farmer;

  private isLoading = new Subject<boolean>();

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      input: []
    });

    this.values = this.form.controls.input.valueChanges.pipe(
      startWith(''),
      // delay emits
      debounceTime(300),
      tap(() => this.isLoading.next(this.form.controls.input.touched)),
      map((value: Farmer | string) => typeof value === 'string' ? value : value.name),
      // use switch map so as to cancel previous subscribed events, before creating new once
      switchMap((value: string) => {
        // Checking value
        if (value && value !== '') {

          return this.search(value).then((result) => {
            this.isLoading.next(false);
            return result;
          });
        } else {
          // if no value is present, return null
          return of(null);
        }
      })
    );
  }

  displayFarmer(farmer: Farmer): string {
    return farmer && farmer.name ? farmer.name : '';
  }

  async search(input: string): Promise<Farmer[]> {
    return this.farmerSearchAbstractProvider.searchFarmers({input});
  }

  select(event: MatAutocompleteSelectedEvent) {
    this.selected = event.option.value;
    this.onPartnerSelectedEvent.emit(this.selected);
  }

}
