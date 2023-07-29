import type { NextPage } from "next";
import { Flex, Text } from "@chakra-ui/react";

const SignIn: NextPage = () => {
  return (
    <Flex flex={1} alignItems="center" justifyContent="center">
      <Text fontSize="2xl" fontWeight="bold">
        Criar Conta
      </Text>
    </Flex>
  );
};

export default SignIn;
