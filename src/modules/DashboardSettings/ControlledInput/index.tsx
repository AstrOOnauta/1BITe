/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable react/require-default-props */
import { ChangeEvent } from "react";
import { FormControl, FormErrorMessage, Stack, Text } from "@chakra-ui/react";
import { FieldErrors, UseFormRegister, UseFormSetValue } from "react-hook-form";

import Input from "~/components/Form/Input";
import { DashboardSettingsFormProps } from "~/shared/interfaces/general/forms";
import {
  brCurrencyMask,
  brPhoneNumberMask,
  zipCodeMask,
} from "~/shared/utils/inputMasks";

interface ControlledInputProps {
  name: keyof DashboardSettingsFormProps;
  label?: string;
  placeholder?: string;
  register: UseFormRegister<DashboardSettingsFormProps>;
  errors: FieldErrors<DashboardSettingsFormProps>;
  setValue: UseFormSetValue<DashboardSettingsFormProps>;
  disabled?: boolean;
}

export default function ControlledInput({
  name,
  label,
  placeholder,
  register,
  errors,
  setValue,
  disabled,
}: ControlledInputProps) {
  function getRegisterOptions() {
    return name === "phoneNumber"
      ? {
          required: "Campo necessário!",
          onChange: (e: ChangeEvent<HTMLInputElement>) =>
            setValue(name, brPhoneNumberMask(e.target.value)),
        }
      : name === "zipCode"
      ? {
          required: "Campo necessário!",
          onChange: (e: ChangeEvent<HTMLInputElement>) =>
            setValue(name, zipCodeMask(e.target.value)),
        }
      : name === "amountDeliveryCharge"
      ? {
          required: "Campo necessário!",
          onChange: (e: ChangeEvent<HTMLInputElement>) =>
            setValue(name, brCurrencyMask(e.target.value)),
        }
      : name === "number"
      ? { required: "Necessário!" }
      : name === "state" ||
        name === "city" ||
        name === "neighborhood" ||
        name === "street"
      ? {}
      : { required: "Campo necessário!" };
  }

  return (
    <Stack w="100%">
      {label ? (
        <Text fontWeight="semibold" color="blue.900" mb={-1}>
          {label}
        </Text>
      ) : null}
      <FormControl isInvalid={!!errors[name]}>
        <Input
          error={!!errors[name]}
          type={
            name === "startHour" || name === "endHour"
              ? "time"
              : name === "distanceDeliveryCharge"
              ? "number"
              : "text"
          }
          defaultValue={name === "distanceDeliveryCharge" ? 1 : undefined}
          placeholder={placeholder}
          textAlign={name === "distanceDeliveryCharge" ? "right" : "left"}
          {...register(name, getRegisterOptions())}
          isDisabled={disabled}
        />
        {errors && errors[name] ? (
          <FormErrorMessage mt={0}>{errors[name]?.message}</FormErrorMessage>
        ) : null}
      </FormControl>
    </Stack>
  );
}
