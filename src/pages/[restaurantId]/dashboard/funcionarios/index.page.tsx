import type { NextPage } from "next";
import { Flex, Text } from "@chakra-ui/react";

const DashboardEmployees: NextPage = () => {
  return (
    <Flex flex={1} alignItems="center" justifyContent="center" overflowY="auto">
      <Text fontSize="2xl" fontWeight="bold">
        Funcionários
      </Text>
    </Flex>
  );
};

export default DashboardEmployees;
