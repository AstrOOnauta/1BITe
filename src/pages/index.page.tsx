import type { NextPage } from "next";
import { Flex, Text } from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <Flex flex={1} alignItems="center" justifyContent="center">
      <Text fontSize="2xl" fontWeight="bold">
        1BITe
      </Text>
    </Flex>
  );
};

export default Home;
