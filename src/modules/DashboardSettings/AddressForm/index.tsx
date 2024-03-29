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

  const isTabletVersion = useBreakpointValue({
    base: true,
    md: true,
    lg: false,
  });

  const isLaptopVersion = useBreakpointValue({
    base: true,
    md: true,
    lg: true,
    xl: true,
    "2xl": false,
  });

  return (
    <Flex
      width="100%"
      gap={2}
      flexDirection={isMobileVersion ? "column" : "row"}
    >
      <Stack
        gap={2}
        justifyContent="space-between"
        w={isTabletVersion ? "100%" : isLaptopVersion ? "60%" : "100%"}
      >
        <ControlledInput
          name="zipCode"
          label="CEP"
          placeholder="Digite o CEP"
          register={register}
          errors={errors}
          setValue={setValue}
        />
        <Stack pb={!isTabletVersion && errors.number ? 5 : 0}>
          <ControlledInput
            name="neighborhood"
            label="Bairro"
            register={register}
            errors={errors}
            setValue={setValue}
            disabled
          />
        </Stack>
      </Stack>
      <Stack gap={2} justifyContent="space-between" w="100%">
        <Flex w="100%" gap={2}>
          <Stack w="50%">
            <ControlledInput
              name="state"
              label="Estado"
              register={register}
              errors={errors}
              setValue={setValue}
              disabled
            />
          </Stack>
          <ControlledInput
            name="city"
            label="Cidade"
            register={register}
            errors={errors}
            setValue={setValue}
            disabled
          />
        </Flex>
        <Flex w="100%" gap={2}>
          <ControlledInput
            name="street"
            label="Rua"
            register={register}
            errors={errors}
            setValue={setValue}
            disabled
          />
          <Stack w="50%">
            <ControlledInput
              name="number"
              label="Nº"
              placeholder="Número"
              register={register}
              errors={errors}
              setValue={setValue}
            />
          </Stack>
        </Flex>
      </Stack>
    </Flex>
  );
}
