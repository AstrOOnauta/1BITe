import {
  CitiesResponse,
  NeighbourhoodsResponse,
  StatesResponse,
  ZipCodeResponse,
} from "~/shared/interfaces/responses/brasilAberto";
import { brasilAbertoApi } from ".";

export const getZipCode = (zipCode: string) => {
  const endpoint = `/zipcode/${zipCode}`;

  return brasilAbertoApi.get<ZipCodeResponse>(endpoint);
};

export const getStates = () => {
  const endpoint = "/states";

  return brasilAbertoApi.get<StatesResponse>(endpoint);
};

export const getCities = (state: string) => {
  const endpoint = `/cities/${state}`;

  return brasilAbertoApi.get<CitiesResponse>(endpoint);
};

export const getNeighbourhoods = (cityId: string) => {
  const endpoint = `/districts/${cityId}`;

  return brasilAbertoApi.get<NeighbourhoodsResponse>(endpoint);
};
