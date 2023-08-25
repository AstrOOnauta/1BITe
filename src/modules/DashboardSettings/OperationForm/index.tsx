import { Flex, Stack, Text, useBreakpointValue } from "@chakra-ui/react";
import {
  Control,
  FieldErrors,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";

import { DashboardSettingsFormProps } from "~/shared/interfaces/general/forms";
import ControlledSelect from "../ControlledSelect";
import ControlledInput from "../ControlledInput";

interface OperationFormProps {
  control: Control<DashboardSettingsFormProps, any>;
  register: UseFormRegister<DashboardSettingsFormProps>;
  errors: FieldErrors<DashboardSettingsFormProps>;
  setValue: UseFormSetValue<DashboardSettingsFormProps>;
}

export default function OperationForm({
  control,
  register,
  errors,
  setValue,
}: OperationFormProps) {
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
    <Stack width="100%">
      <Stack
        width={
          isMobileVersion || isTabletVersion || isLaptopVersion ? "100%" : "50%"
        }
        justifyContent="space-between"
      >
        <ControlledSelect
          label="Dias de Funcionamento"
          name="daysOfOperation"
          control={control}
          register={register}
          errors={errors}
        />
        <Stack width="100%">
          <Text fontWeight="semibold" color="blue.900">
            Horário {isMobileVersion ? "" : "de Funcionamento"}
          </Text>
          <Flex justifyContent="space-between" alignItems="flex-start" gap={2}>
            <ControlledInput
              name="startHour"
              placeholder="Início"
              register={register}
              errors={errors}
              setValue={setValue}
            />
            <Text color="blue.900" marginTop={2}>
              -
            </Text>
            <ControlledInput
              name="endHour"
              placeholder="Final"
              register={register}
              errors={errors}
              setValue={setValue}
            />
          </Flex>
        </Stack>
      </Stack>
    </Stack>
  );
}
