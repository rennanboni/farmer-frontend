import {Injectable} from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';

import {FarmerSearchAbstractProvider, SearchParams} from '../component/farmer-search-card/farmer-search-abstract.provider';
import {Farmer} from '../model/Farmer';
import {DocumentNode} from 'graphql';
import {ApolloQueryResult} from 'apollo-client';

interface FarmersSearchResponse {
  farmers: Farmer[];
}

const FarmersSearch: DocumentNode = gql`
  query($input: String!) {
    farmers(input: $input) {
      id
      name
      document {
        id
        documentNumber
        documentType
      }
      address {
        id
        street
        state
        address
        country
      }
    }
  }
`;

@Injectable()
export class FarmerService implements FarmerSearchAbstractProvider {

  constructor(private apollo: Apollo) {
  }

  async searchFarmers(params: SearchParams): Promise<Farmer[]> {
    const response: ApolloQueryResult<FarmersSearchResponse> = await this.apollo.query<FarmersSearchResponse, SearchParams>({
      query: FarmersSearch,
      variables: params
    }).toPromise();

    return response.data.farmers;
  }
}
