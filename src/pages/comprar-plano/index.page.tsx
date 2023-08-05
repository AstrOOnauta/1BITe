import type { NextPage } from "next";
import { Flex, Text } from "@chakra-ui/react";

const BuyPlan: NextPage = () => {
  return (
    <Flex flex={1} alignItems="center" justifyContent="center">
      <Text fontSize="2xl" fontWeight="bold">
        Cadastrar Restaurante
      </Text>
    </Flex>
  );
};

export default BuyPlan;
