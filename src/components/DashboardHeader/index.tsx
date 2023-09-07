import {
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  FormLabel,
  Switch,
  Text,
  theme,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import { BsReverseLayoutTextSidebarReverse } from "react-icons/bs";

import Button from "../Form/Button";
import SideBar from "../SideBar";
import ProfileMenu from "../ProfileMenu";

export default function DashboardHeader() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const isMobileVersion = useBreakpointValue({
    base: true,
    md: false,
  });

  const isTabletVersion = useBreakpointValue({
    base: true,
    md: true,
    lg: false,
  });

  return (
    <>
      <Flex
        w="100%"
        bg="green.50"
        boxShadow="md"
        p={4}
        justifyContent={isTabletVersion ? "space-between" : "flex-end"}
      >
        {isTabletVersion ? (
          <Button
            colorScheme="none"
            size="md"
            backgroundColor="blue.900"
            _hover={{
              backgroundColor: "blue.700",
            }}
            _active={{
              backgroundColor: "blue.900",
            }}
            onClick={onOpen}
            aria-label="Button to open dashboard menu"
          >
            <BsReverseLayoutTextSidebarReverse
              size={20}
              color={theme.colors.green[50]}
            />
          </Button>
        ) : null}
        <Flex alignItems="center" gap={isMobileVersion ? 4 : 16}>
          <Flex alignItems="center" gap={2}>
            <FormLabel
              htmlFor="switch-open-restaurant"
              color="blue.900"
              fontWeight="bold"
              m={0}
            >
              Abrir para pedidos
            </FormLabel>
            <Switch
              id="switch-open-restaurant"
              sx={{
                "span.chakra-switch__track": {
                  backgroundColor: "blue.900",
                },
                "span.chakra-switch__track:not([data-checked])": {
                  backgroundColor: "gray.300",
                },
              }}
            />
          </Flex>
          <ProfileMenu />
        </Flex>
      </Flex>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose} size="xs">
        <DrawerOverlay />
        <DrawerContent>
          <SideBar closeDrawer={onClose} />
        </DrawerContent>
      </Drawer>
    </>
  );
}
