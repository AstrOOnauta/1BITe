import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
} from "@chakra-ui/react";

import Button from "~/components/Form/Button";

interface ErrorModalContentProps {
  onClose: () => void;
}

export default function ErrorModalContent({ onClose }: ErrorModalContentProps) {
  return (
    <>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>CEP não encontrado!</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text color="blue.900" lineHeight="short">
            Por favor, verifique se o CEP inserido está correto e tente
            novamente. Certifique-se de que tenha digitado os números
            corretamente e que o formato seja válido (XXXXX-XXX). Se o problema
            persistir, entre em contato com nosso suporte para assistência.
          </Text>
        </ModalBody>
        <ModalFooter>
          <Button variant="solid" title="OK" onClick={onClose} />
        </ModalFooter>
      </ModalContent>
    </>
  );
}
