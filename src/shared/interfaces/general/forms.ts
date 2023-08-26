import { GroupBase } from "react-select";
import { ReactSelectInterface } from "./reactSelect";

export interface DashboardSettingsFormProps {
  name: string;
  phoneNumber: string;
  daysOfOperation: GroupBase<ReactSelectInterface>;
  startHour: string;
  endHour: string;
  zipCode: string;
  state: string;
  city: string;
  neighborhood: string;
  street: string;
  number: string;
  states: GroupBase<ReactSelectInterface>;
  cities: GroupBase<ReactSelectInterface>;
  neighborhoods: GroupBase<ReactSelectInterface>;
  amountDeliveryCharge: string;
  distanceDeliveryCharge: string;
  hasFreeDelivery: boolean;
  hasAutomaticOpening: boolean;
}
