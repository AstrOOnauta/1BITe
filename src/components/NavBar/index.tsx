/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Link from "next/link";
import {
  Button,
  ButtonProps,
  Flex,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
  useBreakpointValue,
  useTheme,
} from "@chakra-ui/react";
import { MdMenu } from "react-icons/md";

import { hexToRgba } from "~/shared/utils/hexToRgba";

interface IButton extends ButtonProps {
  title: string;
}

function PrimaryButton({ title }: IButton) {
  return (
    <Button
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
      {title}
    </Button>
  );
}

function SecondaryButton({ title }: IButton) {
  const theme = useTheme();

  return (
    <Button
      variant="outline"
      color="blue.900"
      borderColor="blue.900"
      _hover={{
        backgroundColor: `${hexToRgba(theme.colors.blue[900], "0.1")}`,
      }}
      _active={{
        color: "blue.500",
        borderColor: "blue.500",
      }}
    >
      {title}
    </Button>
  );
}

function LinkButton({ title }: IButton) {
  return (
    <Button
      p={2}
      h={8}
      borderRadius={0}
      borderBottomWidth={2}
      borderColor="transparent"
      bg="none"
      color="blue.900"
      _hover={{
        color: "blue.900",
        borderRadius: 0,
        borderBottomWidth: 2,
        borderColor: "blue.900",
      }}
      _active={{
        color: "blue.600",
        borderRadius: 0,
        borderBottomWidth: 2,
        borderColor: "blue.600",
      }}
    >
      {title}
    </Button>
  );
}

const MENU_DATA = [
  {
    id: 0,
    title: "Início",
    path: "#",
  },
  {
    id: 1,
    title: "Faça um Pedido",
    path: "#",
  },
  {
    id: 2,
    title: "Cadastre seu Restaurante",
    path: "#",
  },
  {
    id: 3,
    title: "Criar Conta",
    path: "#",
  },
  {
    id: 4,
    title: "Entrar",
    path: "#",
  },
];

function MobileMenu({ version }: { version: "mobile" | "tablet" }) {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        icon={<MdMenu />}
        variant="solid"
        backgroundColor="blue.900"
        color="green.50"
        _hover={{
          backgroundColor: "blue.700",
        }}
        _active={{
          backgroundColor: "blue.900",
        }}
      />
      <MenuList>
        {MENU_DATA.map((item) => {
          if (version === "tablet") {
            return item.id > 2 ? (
              <MenuItem key={item.id} as="a" href="#">
                <Text>{item.title}</Text>
              </MenuItem>
            ) : null;
          }

          return (
            <>
              <MenuItem key={item.id} as="a" href="#">
                <Text>{item.title}</Text>
              </MenuItem>
              {item.id === 2 ? <MenuDivider /> : null}
            </>
          );
        })}
      </MenuList>
    </Menu>
  );
}

export default function NavBar() {
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
    <Flex
      alignItems="center"
      justifyContent="space-between"
      alignSelf="center"
      w="100%"
      maxW="1400px"
    >
      <Flex alignItems="center" gap={5}>
        <Link href="#">
          <Image src="icons/logo-1bite.svg" w={16} h={16} />
        </Link>
        {isMobileVersion ? null : (
          <>
            <LinkButton title="Início" />
            <LinkButton title="Faça um Pedido" />
            <LinkButton title="Cadastre seu Restaurante" />
          </>
        )}
      </Flex>
      {isTabletVersion ? (
        <MobileMenu version={isMobileVersion ? "mobile" : "tablet"} />
      ) : (
        <Flex gap={5}>
          <SecondaryButton title="Criar Conta" />
          <PrimaryButton title="Entrar" />
        </Flex>
      )}
    </Flex>
  );
}
