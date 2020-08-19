import { Injectable } from '@angular/core';

import {FarmerSearchAbstractProvider, SearchParams} from '../component/farmer-search-card/farmer-search-abstract.provider';
import {Farmer} from '../model/Farmer';

@Injectable()
export class FarmerServiceMock implements FarmerSearchAbstractProvider {

  constructor() { }

  async searchFarmers(params: SearchParams): Promise<Farmer[]> {
    return [
      {
        id: '1',
        name: 'Rennan Stefan Boni',
        document: {
          documentNumber: '348.665.758-59',
          documentType: 'CPF'
        },
        address: {
          street: 'João Nascimento, 33',
          state: 'São Paulo',
          address: 'Vila Santana',
          country: 'Brazil'
        }
      }
    ];
  }
}
