import type { NextPage } from "next";
import { Flex, Text } from "@chakra-ui/react";

import NavBar from "~/components/NavBar";

const Home: NextPage = () => {
  return (
    <Flex flexDir="column" minH="100vh" w="100%" p={6}>
      <NavBar />
      <Flex flex={1} alignItems="center" justifyContent="center">
        <Text fontSize="2xl" fontWeight="bold">
          1BITe
        </Text>
      </Flex>
    </Flex>
  );
};

export default Home;
