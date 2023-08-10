/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable react/jsx-no-bind */
import {
  Avatar,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  theme,
  useBreakpointValue,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { MdExitToApp, MdExpandMore, MdHome, MdPerson } from "react-icons/md";

export default function ProfileMenu() {
  const router = useRouter();

  const isMobileVersion = useBreakpointValue({
    base: true,
    md: false,
  });

  function logout() {
    router.push("/");
  }

  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={isMobileVersion ? undefined : <MdExpandMore size={24} />}
        variant="solid"
        backgroundColor="blue.900"
        color="green.50"
        _hover={{
          backgroundColor: "blue.700",
        }}
        _active={{
          backgroundColor: "blue.900",
        }}
        borderRadius={isMobileVersion ? "full" : 6}
        px={isMobileVersion ? 1 : 4}
      >
        <Flex alignItems="center" gap={4}>
          <Avatar size="sm" />
          {isMobileVersion ? null : <Text>Usuário</Text>}
        </Flex>
      </MenuButton>
      <MenuList bg="green.50" shadow="xl">
        <MenuItem
          as={Link}
          href="/meus-restaurantes"
          bg={router.asPath === "/meus-restaurantes" ? "blue.900" : "green.50"}
        >
          <Flex w="100%" justifyContent="space-between">
            <Text
              color={
                router.asPath === "/meus-restaurantes" ? "green.50" : "blue.900"
              }
            >
              Perfil
            </Text>
            <MdPerson
              size={24}
              color={
                router.asPath === "/meus-restaurantes"
                  ? theme.colors.green[50]
                  : theme.colors.blue[900]
              }
            />
          </Flex>
        </MenuItem>
        <MenuItem
          as={Link}
          href="/meus-restaurantes"
          bg={router.asPath === "/meus-restaurantes" ? "blue.900" : "green.50"}
        >
          <Flex w="100%" justifyContent="space-between">
            <Text
              color={
                router.asPath === "/meus-restaurantes" ? "green.50" : "blue.900"
              }
            >
              Meus Restaurantes
            </Text>
            <MdHome
              size={24}
              color={
                router.asPath === "/meus-restaurantes"
                  ? theme.colors.green[50]
                  : theme.colors.blue[900]
              }
            />
          </Flex>
        </MenuItem>
        <MenuItem as="button" onClick={logout} bg="green.50">
          <Flex w="100%" justifyContent="space-between">
            <Text color="blue.900">Sair</Text>
            <MdExitToApp size={24} color={theme.colors.blue[900]} />
          </Flex>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
