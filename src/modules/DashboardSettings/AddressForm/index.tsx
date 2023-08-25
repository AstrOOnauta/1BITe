import { Flex, Stack, Text, useBreakpointValue } from "@chakra-ui/react";
import { FieldErrors, UseFormRegister, UseFormSetValue } from "react-hook-form";

import { DashboardSettingsFormProps } from "~/shared/interfaces/general/forms";
import ControlledInput from "../ControlledInput";

interface AddressFormProps {
  register: UseFormRegister<DashboardSettingsFormProps>;
  errors: FieldErrors<DashboardSettingsFormProps>;
  setValue: UseFormSetValue<DashboardSettingsFormProps>;
}

export default function AddressForm({
  register,
  errors,
  setValue,
}: AddressFormProps) {
  const isMobileVersion = useBreakpointValue({
    base: true,
    md: false,
  });

  const aditionalLabel = isMobileVersion ? "" : "do Restaurante";

  return (
    <Stack width="100%">
      <Flex gap={2}>
        <ControlledInput
          name="zipCode"
          label={`CEP ${aditionalLabel}`}
          placeholder="Digite o CEP do seu restaurante"
          register={register}
          errors={errors}
          setValue={setValue}
        />
        <ControlledInput
          name="street"
          label={`Rua ${aditionalLabel}`}
          placeholder="Digite a rua do seu restaurante"
          register={register}
          errors={errors}
          setValue={setValue}
        />
      </Flex>
      <Flex gap={2} alignItems="flex-start">
        <ControlledInput
          name="neighborhood"
          label={`Bairro ${aditionalLabel}`}
          placeholder="Digite o bairro do seu restaurante"
          register={register}
          errors={errors}
          setValue={setValue}
        />
        <ControlledInput
          name="number"
          label={`Número ${aditionalLabel}`}
          placeholder="Digite o número do seu restaurante"
          register={register}
          errors={errors}
          setValue={setValue}
        />
      </Flex>
    </Stack>
  );
}
