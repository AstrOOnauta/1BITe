import {
  Avatar,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { MdExitToApp, MdExpandMore, MdHome, MdPerson } from "react-icons/md";

export default function ProfileMenu() {
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<MdExpandMore size={24} />}
        variant="solid"
        backgroundColor="blue.900"
        color="green.50"
        _hover={{
          backgroundColor: "blue.700",
        }}
        _active={{
          backgroundColor: "blue.900",
        }}
      >
        <Flex alignItems="center" gap={4}>
          <Avatar size="sm" />
          <Text>Usuário</Text>
        </Flex>
      </MenuButton>
      <MenuList bg="green.50" shadow="xl">
        <MenuItem as={Link} href="#" bg="green.50">
          <Flex w="100%" justifyContent="space-between">
            <Text color="blue.900">Perfil</Text>
            <MdPerson size={24} />
          </Flex>
        </MenuItem>
        <MenuItem as={Link} href="#" bg="green.50">
          <Flex w="100%" justifyContent="space-between">
            <Text color="blue.900">Meus Restaurantes</Text>
            <MdHome size={24} />
          </Flex>
        </MenuItem>
        <MenuItem as="button" onClick={() => null} bg="green.50">
          <Flex w="100%" justifyContent="space-between">
            <Text color="blue.900">Sair</Text>
            <MdExitToApp size={24} />
          </Flex>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
