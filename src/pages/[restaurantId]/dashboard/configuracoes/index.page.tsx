import type { NextPage } from "next";
import { Flex, Text } from "@chakra-ui/react";
import { useEffect } from "react";

import { getCities } from "~/shared/services/api/brasilAberto";

const DashboardSettings: NextPage = () => {
  useEffect(() => {
    getCities("RN").then((res) => console.log(res));
  }, []);

  return (
    <Flex flex={1} alignItems="center" justifyContent="center" overflowY="auto">
      <Text fontSize="2xl" fontWeight="bold">
        Configurações
      </Text>
    </Flex>
  );
};

export default DashboardSettings;
