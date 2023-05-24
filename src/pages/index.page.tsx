import type { NextPage } from "next";
import { Flex, Text } from "@chakra-ui/react";

import ThemeButton from "~/components/ThemeButton";

const Home: NextPage = () => {
  return (
    <Flex flexDir="column" minH="100vh" w="100%" p={6}>
      <Flex justifyContent="flex-end">
        <ThemeButton aria-label="Toggle light-dark mode" />
      </Flex>
      <Flex flex={1} alignItems="center" justifyContent="center">
        <Text fontSize="2xl" fontWeight="bold">
          1BITe
        </Text>
      </Flex>
    </Flex>
  );
};

export default Home;
