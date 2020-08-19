export interface Farmer {
  id: string;
  name: string;
  document: Document;
  address: Address;
}

export interface Address {
  street: string;
  state: string;
  address: string;
  country: string;
}

export interface Document {
  documentNumber: string;
  documentType: string;
}
