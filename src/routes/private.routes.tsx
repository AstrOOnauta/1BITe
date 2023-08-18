import React from "react";
import { Flex, Stack, useBreakpointValue } from "@chakra-ui/react";

import SideBar from "~/components/SideBar";
import DashboardHeader from "~/components/DashboardHeader";
import { ChildrenInterface } from "~/shared/interfaces/general/childrenNode";

const PrivateRoutes: React.FC<ChildrenInterface> = ({ children }) => {
  const isTabletVersion = useBreakpointValue({
    base: true,
    md: true,
    lg: false,
  });

  return (
    <Flex minH="100vh" overflow="hidden">
      {isTabletVersion ? null : <SideBar />}
      <Stack w="100%">
        <DashboardHeader />
        {children}
      </Stack>
    </Flex>
  );
};

export default PrivateRoutes;
