import type { NextPage } from "next";
import { Flex, Text } from "@chakra-ui/react";

const PrivacyPolicy: NextPage = () => {
  return (
    <Flex flex={1} alignItems="center" justifyContent="center">
      <Text fontSize="2xl" fontWeight="bold">
        Termos de Serviço
      </Text>
    </Flex>
  );
};

export default PrivacyPolicy;
