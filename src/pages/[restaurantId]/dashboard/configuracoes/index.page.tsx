/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable no-return-assign */
/* eslint-disable consistent-return */
/* eslint-disable react/jsx-no-bind */
import { useState } from "react";
import type { NextPage } from "next";
import {
  Checkbox,
  Flex,
  FormLabel,
  Image,
  Stack,
  Text,
  theme,
  useBreakpointValue,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { MdAddPhotoAlternate, MdDelete, MdInfoOutline } from "react-icons/md";
import Select, { GroupBase, MultiValue } from "react-select";

import Button from "~/components/Form/Button";
import Input from "~/components/Form/Input";
import { getBase64 } from "~/shared/utils/getBase64";
import { lightMultiStyle } from "~/styles/react-select";
import { ReactSelectInterface } from "~/shared/interfaces/general/reactSelect";

const DAYS_WEEK_DATA: readonly (
  | ReactSelectInterface
  | GroupBase<ReactSelectInterface>
)[] = [
  // { value: "all", label: "Todos" },
  { value: "sunday", label: "Dom" },
  { value: "monday", label: "Seg" },
  { value: "tuesday", label: "Ter" },
  { value: "wednesday", label: "Qua" },
  { value: "thursday", label: "Qui" },
  { value: "friday", label: "Sex" },
  { value: "saturday", label: "Sáb" },
];

const DashboardSettings: NextPage = () => {
  const [coverPicture, setCoverPicture] = useState<string>("");
  const [profilePicture, setProfilePicture] = useState<string>("");
  const [selectedDays, setSelectedDays] = useState<MultiValue<
    ReactSelectInterface | GroupBase<ReactSelectInterface>
  > | null>(null);

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

  function renderOperationForm() {
    return (
      <Stack
        width={isMobileVersion ? "100%" : isTabletVersion ? "60%" : "100%"}
      >
        <Stack
          width={
            isMobileVersion || isTabletVersion || isLaptopVersion
              ? "100%"
              : "50%"
          }
          gap={0}
        >
          <Stack width="100%">
            <Text fontWeight="semibold" color="blue.900">
              Dias de Funcionamento
            </Text>
            <Select
              isMulti
              noOptionsMessage={() => "Nenhum dia disponível"}
              placeholder="Selecione..."
              styles={lightMultiStyle}
              options={DAYS_WEEK_DATA}
              value={selectedDays}
              onChange={(newValue) => setSelectedDays(newValue)}
            />
          </Stack>
          <Stack width="100%">
            <Text fontWeight="semibold" color="blue.900">
              Horário {isTabletVersion ? "" : "de Funcionamento"}
            </Text>
            <Flex justifyContent="space-between" alignItems="center" gap={2}>
              <Input type="time" placeholder="Início" />
              -
              <Input type="time" placeholder="Final" />
            </Flex>
          </Stack>
        </Stack>
      </Stack>
    );
  }

  function renderAddressForm() {
    const aditionalLabel =
      isMobileVersion || isTabletVersion ? "" : "do Restaurante";

    return (
      <Stack width="100%" gap={isMobileVersion || isTabletVersion ? 0 : 2}>
        <Flex gap={2}>
          <Stack width="100%">
            <Text fontWeight="semibold" color="blue.900">
              CEP {aditionalLabel}
            </Text>
            <Input placeholder="Digite o CEP do seu restaurante" />
          </Stack>
          <Stack width="100%">
            <Text fontWeight="semibold" color="blue.900">
              Rua {aditionalLabel}
            </Text>
            <Input placeholder="Digite a rua do seu restaurante" />
          </Stack>
        </Flex>
        <Flex gap={2} alignItems="flex-end">
          <Stack width="100%">
            <Text fontWeight="semibold" color="blue.900">
              Bairro {aditionalLabel}
            </Text>
            <Input placeholder="Digite o bairro do seu restaurante" />
          </Stack>
          <Stack width="100%">
            <Text fontWeight="semibold" color="blue.900">
              Número {aditionalLabel}
            </Text>
            <Input placeholder="Digite o número do seu restaurante" />
          </Stack>
        </Flex>
      </Stack>
    );
  }

  return (
    <Stack flex={1} overflowY="auto">
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={isMobileVersion ? "xs" : "md"}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Horário de Funcionamento Automático</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text color="blue.900" lineHeight="short">
              A programação de horário de funcionamento do seu restaurante é um
              recurso valioso para mante-lo fiel aos seus clientes. Com ele é
              possível abrir e fechar seu restaurante de forma eficiente de
              acordo com os dias e horários configurados.
            </Text>
            <Stack bg="green.300" borderRadius="md" px={2} py={3} mt={4}>
              <Text
                fontSize="xs"
                fontWeight="semibold"
                color="blue.900"
                lineHeight="shorter"
              >
                <Text as="span" fontWeight="bold">
                  Cuidado:{" "}
                </Text>
                ao ativa-lo, seu restaurante estavá visível para o público de
                acordo com os dias e horarios estabelecidos na configuração.
                Portanto, recomendamos revisar cuidadosamente suas configurações
                antes de ativar essa funcionalidade para garantir que
                corresponda às suas intenções e à capacidade operacional do seu
                estabelecimento.
              </Text>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button variant="solid" title="OK" onClick={onClose} />
          </ModalFooter>
        </ModalContent>
      </Modal>
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
              <Button px={14} variant="solid" title="Salvar" />
            )}
          </Flex>
          <Stack>
            <Text fontWeight="semibold" color="blue.900">
              Foto de Capa
            </Text>
            {coverPicture ? (
              <Stack position="relative" w="100%">
                <FormLabel
                  htmlFor="imageFileInput"
                  cursor="pointer"
                  title="Adicionar nova foto de capa do restaurante"
                  width="100%"
                >
                  <Image
                    src={coverPicture}
                    alt="foto de capa do restaurante"
                    w="100%"
                    aspectRatio={isMobileVersion ? "4/1" : "6/1"}
                    objectFit="cover"
                    borderRadius={8}
                  />
                </FormLabel>
                <Button
                  colorScheme="none"
                  position="absolute"
                  top={0}
                  right={2}
                  p={0}
                  bg="red.500"
                  borderRadius="full"
                  size={isMobileVersion ? "sm" : "md"}
                  boxShadow="md"
                  title="Remover foto de capa do restaurante"
                  onClick={() => removePicture("cover")}
                >
                  <MdDelete
                    size={isMobileVersion ? 20 : 24}
                    color={theme.colors.green[50]}
                  />
                </Button>
              </Stack>
            ) : (
              <FormLabel htmlFor="coverFileInput" cursor="pointer">
                <Flex
                  w="100%"
                  alignItems="center"
                  justifyContent="center"
                  bg="blue.50"
                  borderRadius={8}
                  title="Adicionar foto de capa para o restaurante"
                  aspectRatio={isMobileVersion ? "4/1" : "6/1"}
                >
                  <MdAddPhotoAlternate
                    size={isMobileVersion ? 24 : 48}
                    color={theme.colors.blue[900]}
                  />
                </Flex>
              </FormLabel>
            )}
            <Input
              id="coverFileInput"
              type="file"
              accept=".png, .jpg, .jpeg"
              onClick={(e) => ((e.target as HTMLInputElement).value = "")}
              onChange={(e) => {
                if (e.target.files) {
                  onChangePicture(e.target.files[0], "cover");
                }
              }}
              display="none"
            />
          </Stack>
          <Flex width="100%" pt={isMobileVersion ? 0 : 4} gap={2}>
            <Stack marginRight={isMobileVersion ? 0 : 4}>
              <Text fontWeight="semibold" color="blue.900">
                Foto de Perfil
              </Text>
              {profilePicture ? (
                <Stack
                  position="relative"
                  w={isMobileVersion ? 120 : isTabletVersion ? 200 : 240}
                  h={isMobileVersion ? 120 : isTabletVersion ? 200 : 240}
                >
                  <FormLabel
                    htmlFor="profileFileInput"
                    cursor="pointer"
                    title="Adicionar nova foto de perfil do restaurante"
                    width="100%"
                    m={0}
                  >
                    <Image
                      src={profilePicture}
                      alt="foto de pefil do restaurante"
                      w="100%"
                      objectFit="cover"
                      borderRadius={8}
                      m={0}
                    />
                  </FormLabel>
                  <Button
                    colorScheme="none"
                    position="absolute"
                    top={0}
                    right={2}
                    p={0}
                    bg="red.500"
                    borderRadius="full"
                    size={isMobileVersion ? "sm" : "md"}
                    boxShadow="md"
                    title="Remover foto de perfil do restaurante"
                    onClick={() => removePicture("profile")}
                  >
                    <MdDelete
                      size={isMobileVersion ? 20 : 24}
                      color={theme.colors.green[50]}
                    />
                  </Button>
                </Stack>
              ) : (
                <FormLabel htmlFor="profileFileInput" cursor="pointer">
                  <Flex
                    boxSize={
                      isMobileVersion ? 120 : isTabletVersion ? 200 : 240
                    }
                    alignItems="center"
                    justifyContent="center"
                    bg="blue.50"
                    borderRadius={8}
                    title="Adicionar foto de capa para o restaurante"
                    aspectRatio={isMobileVersion ? "4/1" : "6/1"}
                  >
                    <MdAddPhotoAlternate
                      size={isMobileVersion ? 24 : 48}
                      color={theme.colors.blue[900]}
                    />
                  </Flex>
                </FormLabel>
              )}
              <Input
                id="profileFileInput"
                type="file"
                accept=".png, .jpg, .jpeg"
                onClick={(e) => ((e.target as HTMLInputElement).value = "")}
                onChange={(e) => {
                  if (e.target.files) {
                    onChangePicture(e.target.files[0], "profile");
                  }
                }}
                display="none"
              />
            </Stack>
            <Stack width="100%" justifyContent="space-between">
              <Flex
                width="100%"
                wrap={isMobileVersion ? "wrap" : "nowrap"}
                gap={2}
              >
                <Stack width="100%">
                  <Text fontWeight="semibold" color="blue.900">
                    Nome do Restaurante
                  </Text>
                  <Input placeholder="Digite o nome do seu restaurante" />
                </Stack>
                <Stack
                  width={
                    isMobileVersion ? "100%" : isTabletVersion ? "44%" : "33%"
                  }
                >
                  <Text fontWeight="semibold" color="blue.900">
                    {isMobileVersion || isTabletVersion ? "" : "Número para"}{" "}
                    Contato
                  </Text>
                  <Input placeholder="Digite um número para contato" />
                </Stack>
              </Flex>
              {isMobileVersion ? null : (
                <Flex
                  justifyContent="space-between"
                  alignItems="flex-end"
                  width="100%"
                  gap={2}
                >
                  {renderOperationForm()}
                  {renderAddressForm()}
                </Flex>
              )}
            </Stack>
          </Flex>
          {isMobileVersion ? (
            <Stack w="100%">
              {renderOperationForm()}
              {renderAddressForm()}
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
              <Stack>
                <Text fontWeight="semibold" color="blue.900">
                  Estados que faz entrega
                </Text>
                <Select
                  isMulti
                  styles={lightMultiStyle}
                  placeholder="Selecione..."
                />
              </Stack>
              <Stack>
                <Text fontWeight="semibold" color="blue.900">
                  Cidades que faz entrega
                </Text>
                <Select
                  isMulti
                  styles={lightMultiStyle}
                  placeholder="Selecione..."
                />
              </Stack>
              <Stack>
                <Text fontWeight="semibold" color="blue.900">
                  Bairros que faz entrega
                </Text>
                <Select
                  isMulti
                  styles={lightMultiStyle}
                  placeholder="Selecione..."
                />
              </Stack>
            </Stack>
            <Stack
              w={isMobileVersion ? "100%" : isLaptopVersion ? "40%" : "20%"}
            >
              <Text fontWeight="semibold" color="blue.900">
                Taxa de entrega
              </Text>
              <Flex gap={2} alignItems="center">
                <Text fontWeight="semibold" color="blue.900">
                  R$
                </Text>
                <Input placeholder="0,00" />
                <Text fontWeight="semibold" color="blue.900">
                  /
                </Text>
                <Input placeholder="1" textAlign="right" />
                <Text fontWeight="semibold" color="blue.900">
                  km
                </Text>
              </Flex>
              <Checkbox colorScheme="whatsapp">Entrega grátis</Checkbox>
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
            <Checkbox colorScheme="whatsapp" mt={1} />
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
      {isMobileVersion ? (
        <Flex
          width="100%"
          alignItems="center"
          justifyContent="center"
          p={4}
          bg="green.50"
        >
          <Button width="100%" variant="solid" title="Salvar" />
        </Flex>
      ) : null}
    </Stack>
  );
};

export default DashboardSettings;
