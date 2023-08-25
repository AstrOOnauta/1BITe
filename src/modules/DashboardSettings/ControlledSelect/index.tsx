/* eslint-disable react/require-default-props */
import { FormControl, FormErrorMessage, Stack, Text } from "@chakra-ui/react";
import {
  Control,
  Controller,
  FieldErrors,
  UseFormRegister,
} from "react-hook-form";
import Select, { GroupBase, PropsValue } from "react-select";

import { DashboardSettingsFormProps } from "~/shared/interfaces/general/forms";
import { ReactSelectInterface } from "~/shared/interfaces/general/reactSelect";
import { lightErrorMultiStyle, lightMultiStyle } from "~/styles/react-select";

const DAYS_WEEK_DATA: readonly ReactSelectInterface[] = [
  // { value: "all", label: "Todos" },
  { value: "sunday", label: "Dom" },
  { value: "monday", label: "Seg" },
  { value: "tuesday", label: "Ter" },
  { value: "wednesday", label: "Qua" },
  { value: "thursday", label: "Qui" },
  { value: "friday", label: "Sex" },
  { value: "saturday", label: "Sáb" },
];

const STATES_DATA: readonly ReactSelectInterface[] = [
  { value: "CE", label: "Ceará" },
  { value: "RN", label: "Rio Grande do Norte" },
  { value: "PB", label: "Paraíba" },
];

const CITIES_DATA: readonly ReactSelectInterface[] = [
  { value: "natal", label: "Natal" },
  { value: "parnamirim", label: "Parnamirim" },
  { value: "macaiba", label: "Macaiba" },
];

const NEIGHBORHOODS_DATA: readonly ReactSelectInterface[] = [
  { value: "tirol", label: "Tirol" },
  { value: "nova-descoberta", label: "Nova Descoberta" },
  { value: "lagoa-nova", label: "Lagoa Nova" },
];

interface ControlledSelectProps {
  name: keyof DashboardSettingsFormProps;
  control: Control<DashboardSettingsFormProps, any>;
  register: UseFormRegister<DashboardSettingsFormProps>;
  errors: FieldErrors<DashboardSettingsFormProps>;
  label?: string;
}

export default function ControlledSelect({
  name,
  control,
  register,
  errors,
  label,
}: ControlledSelectProps) {
  return (
    <Stack w="100%">
      {label ? (
        <Text fontWeight="semibold" color="blue.900">
          {label}
        </Text>
      ) : null}
      <FormControl isInvalid={!!errors?.[name]}>
        <Controller
          control={control}
          name={name}
          render={({ field: { onChange, value, ref } }) => (
            <Select
              isMulti
              noOptionsMessage={() => "Nenhum dia disponível"}
              placeholder="Selecione..."
              styles={
                errors && errors?.[name]
                  ? lightErrorMultiStyle
                  : lightMultiStyle
              }
              options={
                name === "daysOfOperation"
                  ? DAYS_WEEK_DATA
                  : name === "states"
                  ? STATES_DATA
                  : name === "cities"
                  ? CITIES_DATA
                  : name === "neighborhoods"
                  ? NEIGHBORHOODS_DATA
                  : []
              }
              {...register(name, {
                required: "Campo necessário!",
              })}
              value={value as PropsValue<GroupBase<ReactSelectInterface>>}
              onChange={onChange}
              ref={ref}
            />
          )}
        />
        {errors && errors[name] ? (
          <FormErrorMessage mt={0}>{errors[name]?.message}</FormErrorMessage>
        ) : null}
      </FormControl>
    </Stack>
  );
}
