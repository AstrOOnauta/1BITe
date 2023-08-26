export interface ZipCodeResponse {
  meta: {
    currentPage: number;
    itemsPerPage: number;
    totalOfItems: number;
    totalOfPages: number;
  };
  result: {
    street: string;
    complement: string;
    district: string;
    districtId: number;
    city: string;
    cityId: number;
    ibgeId: number;
    state: string;
    stateShortname: string;
    zipcode: string;
  };
}

export interface StatesResponse {
  name: string;
  shortName: string;
  region: string;
}

export interface CitiesResponse {
  id: number;
  ibgeId: number;
  name: string;
}

export interface NeighbourhoodsResponse {
  id: number;
  name: string;
}
