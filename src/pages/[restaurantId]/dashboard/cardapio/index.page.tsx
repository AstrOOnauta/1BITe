import type { NextPage } from "next";
import { Flex, Text } from "@chakra-ui/react";

const DashboardProducts: NextPage = () => {
  return (
    <Flex flex={1} alignItems="center" justifyContent="center">
      <Text fontSize="2xl" fontWeight="bold">
        Cardápio
      </Text>
    </Flex>
  );
};

export default DashboardProducts;
