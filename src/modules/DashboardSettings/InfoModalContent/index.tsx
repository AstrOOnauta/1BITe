import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Stack,
  Text,
} from "@chakra-ui/react";

import Button from "~/components/Form/Button";

interface InfoModalContentProps {
  onClose: () => void;
}

export default function InfoModalContent({ onClose }: InfoModalContentProps) {
  return (
    <>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Horário de Funcionamento Automático</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text color="blue.900" lineHeight="short">
            A programação de horário de funcionamento do seu restaurante é um
            recurso valioso para mante-lo fiel aos seus clientes. Com ele é
            possível abrir e fechar seu restaurante de forma eficiente de acordo
            com os dias e horários configurados.
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
              antes de ativar essa funcionalidade para garantir que corresponda
              às suas intenções e à capacidade operacional do seu
              estabelecimento.
            </Text>
          </Stack>
        </ModalBody>
        <ModalFooter>
          <Button variant="solid" title="OK" onClick={onClose} />
        </ModalFooter>
      </ModalContent>
    </>
  );
}
