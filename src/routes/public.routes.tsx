import React from "react";
import { Flex } from "@chakra-ui/react";

import NavBar from "~/components/NavBar";
import { ChildrenInterface } from "~/shared/interfaces/general/childrenNode";

const PublicRoutes: React.FC<ChildrenInterface> = ({ children }) => {
  return (
    <Flex bg="gray.50" flexDir="column" minH="100vh" w="100%" p={6}>
      <NavBar />
      {children}
    </Flex>
  );
};

export default PublicRoutes;
