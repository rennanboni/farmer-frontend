import {Farmer} from '../../model/Farmer';

export interface SearchParams {
  input: string;
}

export abstract class FarmerSearchAbstractProvider {
  abstract searchFarmers(params: SearchParams): Promise<Farmer[]>;
}
