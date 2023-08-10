import React from "react";
import { Flex, Stack, useBreakpointValue } from "@chakra-ui/react";

import SideBar from "~/components/SideBar";
import { ChildrenInterface } from "~/shared/interfaces/general/childrenNode";

const PrivateRoutes: React.FC<ChildrenInterface> = ({ children }) => {
  const isTabletVersion = useBreakpointValue({
    base: true,
    md: true,
    lg: false,
  });

  return (
    <Flex minH="100vh">
      {isTabletVersion ? null : <SideBar />}
      <Stack w="100%">{children}</Stack>
    </Flex>
  );
};

export default PrivateRoutes;
