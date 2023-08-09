import type { NextPage } from "next";
import { Flex, Text } from "@chakra-ui/react";

const DashboardSettings: NextPage = () => {
  return (
    <Flex flex={1} alignItems="center" justifyContent="center">
      <Text fontSize="2xl" fontWeight="bold">
        Configurações
      </Text>
    </Flex>
  );
};

export default DashboardSettings;
