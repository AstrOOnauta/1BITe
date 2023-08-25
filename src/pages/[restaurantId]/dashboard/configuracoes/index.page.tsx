/* eslint-disable react/jsx-no-bind */
/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable consistent-return */
import { useState } from "react";
import type { NextPage } from "next";
import {
  Checkbox,
  Flex,
  Stack,
  Text,
  theme,
  useBreakpointValue,
  useDisclosure,
  Modal,
} from "@chakra-ui/react";
import { MdInfoOutline } from "react-icons/md";
import { useForm } from "react-hook-form";

import Button from "~/components/Form/Button";
import ControlledSelect from "~/modules/DashboardSettings/ControlledSelect";
import InfoModalContent from "~/modules/DashboardSettings/InfoModalContent";
import ControlledInput from "~/modules/DashboardSettings/ControlledInput";
import OperationForm from "~/modules/DashboardSettings/OperationForm";
import AddressForm from "~/modules/DashboardSettings/AddressForm";
import ProfilePictureForm from "~/modules/DashboardSettings/ProfilePictureForm";
import CoverPictureForm from "~/modules/DashboardSettings/CoverPictureForm";

import { getBase64 } from "~/shared/utils/getBase64";
import { DashboardSettingsFormProps } from "~/shared/interfaces/general/forms";

const DashboardSettings: NextPage = () => {
  const [coverPicture, setCoverPicture] = useState<string>("");
  const [profilePicture, setProfilePicture] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    control,
  } = useForm<DashboardSettingsFormProps>();
  const { isOpen, onOpen, onClose } = useDisclosure();

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

  function onSubmit(form: DashboardSettingsFormProps) {
    return window.alert(
      `Configurações atualizadas! \n ${JSON.stringify(form)}`
    );
  }

  async function onChangePicture(file: File, type: string) {
    const newBase64 = await getBase64(file);

    if (type === "cover") {
      return setCoverPicture(newBase64 as string);
    }

    if (type === "profile") {
      return setProfilePicture(newBase64 as string);
    }
  }

  function removePicture(type: string) {
    if (type === "cover") {
      return setCoverPicture("");
    }

    if (type === "profile") {
      return setProfilePicture("");
    }
  }

  return (
    <Stack flex={1} overflowY="auto">
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={isMobileVersion ? "xs" : "md"}
      >
        <InfoModalContent onClose={onClose} />
      </Modal>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ width: "100%", flex: 1, overflowY: "auto" }}
      >
        <Stack flex={1} p={7} overflowY="auto">
          <Stack>
            <Flex
              flexDirection={isMobileVersion ? "column" : "row"}
              width="100%"
              justifyContent="space-between"
              gap={2}
            >
              <Text
                color="blue.900"
                fontSize="xl"
                fontWeight="bold"
                textAlign="center"
              >
                Dados do Restaurante
              </Text>
              {isMobileVersion ? null : (
                <Button px={14} variant="solid" title="Salvar" type="submit" />
              )}
            </Flex>
            <CoverPictureForm
              coverPicture={coverPicture}
              removePicture={removePicture}
              onChangePicture={onChangePicture}
            />
            <Flex width="100%" pt={isMobileVersion ? 0 : 4} gap={2}>
              <ProfilePictureForm
                profilePicture={profilePicture}
                removePicture={removePicture}
                onChangePicture={onChangePicture}
              />
              <Stack width="100%" justifyContent="space-between">
                <Flex
                  width="100%"
                  wrap={isMobileVersion ? "wrap" : "nowrap"}
                  gap={2}
                >
                  <ControlledInput
                    name="name"
                    label="Nome do Restaurante"
                    placeholder="Digite o nome do seu restaurante"
                    register={register}
                    errors={errors}
                    setValue={setValue}
                  />
                  <Stack
                    width={
                      isMobileVersion ? "100%" : isTabletVersion ? "44%" : "33%"
                    }
                  >
                    <ControlledInput
                      name="phoneNumber"
                      label={
                        isMobileVersion || isTabletVersion
                          ? "Contato"
                          : "Número para Contato"
                      }
                      placeholder="Digite um número para contato"
                      register={register}
                      errors={errors}
                      setValue={setValue}
                    />
                  </Stack>
                </Flex>
                {isMobileVersion ? null : (
                  <Flex
                    justifyContent="space-between"
                    alignItems="flex-end"
                    width="100%"
                    gap={2}
                  >
                    <OperationForm
                      control={control}
                      register={register}
                      errors={errors}
                      setValue={setValue}
                    />
                    {isTabletVersion ? null : (
                      <AddressForm
                        register={register}
                        errors={errors}
                        setValue={setValue}
                      />
                    )}
                  </Flex>
                )}
              </Stack>
            </Flex>
            {isTabletVersion ? (
              <Stack w="100%">
                {isMobileVersion ? (
                  <OperationForm
                    control={control}
                    register={register}
                    errors={errors}
                    setValue={setValue}
                  />
                ) : null}

                <AddressForm
                  register={register}
                  errors={errors}
                  setValue={setValue}
                />
              </Stack>
            ) : null}
          </Stack>
          <Stack pt={10}>
            <Text
              color="blue.900"
              fontSize="xl"
              fontWeight="bold"
              textAlign={isMobileVersion ? "center" : "start"}
            >
              Configurações da Entrega (Delivery)
            </Text>
            <Flex pt={2} w="100%" gap={isMobileVersion ? 2 : 10} wrap="wrap">
              <Stack
                w={isMobileVersion ? "100%" : isTabletVersion ? "50%" : "36.8%"}
              >
                <ControlledSelect
                  label="Estados que faz entrega"
                  name="states"
                  control={control}
                  register={register}
                  errors={errors}
                />
                <ControlledSelect
                  label="Cidades que faz entrega"
                  name="cities"
                  control={control}
                  register={register}
                  errors={errors}
                />
                <ControlledSelect
                  label="Bairros que faz entrega"
                  name="neighborhoods"
                  control={control}
                  register={register}
                  errors={errors}
                />
              </Stack>
              <Stack
                w={isMobileVersion ? "100%" : isLaptopVersion ? "44%" : "30%"}
              >
                <Text fontWeight="semibold" color="blue.900">
                  Taxa de entrega
                </Text>
                <Flex gap={2} alignItems="flex-start">
                  <Text fontWeight="semibold" color="blue.900" marginTop={2}>
                    R$
                  </Text>
                  <ControlledInput
                    name="amountDeliveryCharge"
                    placeholder="0,00"
                    register={register}
                    errors={errors}
                    setValue={setValue}
                  />
                  <Text fontWeight="semibold" color="blue.900" marginTop={2}>
                    /
                  </Text>
                  <ControlledInput
                    name="distanceDeliveryCharge"
                    placeholder="---"
                    register={register}
                    errors={errors}
                    setValue={setValue}
                  />
                  <Text fontWeight="semibold" color="blue.900" marginTop={2}>
                    km
                  </Text>
                </Flex>
                <Checkbox
                  colorScheme="whatsapp"
                  {...register("hasFreeDelivery")}
                >
                  Entrega grátis
                </Checkbox>
              </Stack>
            </Flex>
          </Stack>
          <Stack pt={10}>
            <Text
              color="blue.900"
              fontSize="xl"
              fontWeight="bold"
              textAlign={isMobileVersion ? "center" : "start"}
            >
              Programar Horário de Funcionamento Automático
            </Text>
            <Flex pt={2} gap={2} alignItems="flex-start">
              <Checkbox
                colorScheme="whatsapp"
                mt={1}
                {...register("hasAutomaticOpening")}
              />
              <Text>
                Ativar abertura automática do restaurante
                <Button
                  colorScheme="none"
                  borderRadius="full"
                  p={0}
                  ml={2}
                  size="xs"
                  bg="green.300"
                  _hover={{ backgroundColor: "green.200" }}
                  onClick={onOpen}
                >
                  <MdInfoOutline size={20} color={theme.colors.blue[900]} />
                </Button>
              </Text>
            </Flex>
          </Stack>
        </Stack>
      </form>
      {isMobileVersion ? (
        <Flex
          width="100%"
          alignItems="center"
          justifyContent="center"
          p={4}
          bg="green.50"
        >
          <Button
            width="100%"
            variant="solid"
            title="Salvar"
            onClick={handleSubmit(onSubmit)}
          />
        </Flex>
      ) : null}
    </Stack>
  );
};

export default DashboardSettings;
