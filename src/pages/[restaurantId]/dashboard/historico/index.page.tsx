import type { NextPage } from "next";
import { Flex, Text } from "@chakra-ui/react";

const DashboardOrdersHistory: NextPage = () => {
  return (
    <Flex flex={1} alignItems="center" justifyContent="center">
      <Text fontSize="2xl" fontWeight="bold">
        Histórico de Pedidos
      </Text>
    </Flex>
  );
};

export default DashboardOrdersHistory;
