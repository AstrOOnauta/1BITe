/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
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
  isActive?: boolean;
}

const MENU_DATA = [
  {
    id: 0,
    title: "Início",
    path: "/",
  },
  {
    id: 1,
    title: "Faça um Pedido",
    path: "/restaurantes",
  },
  {
    id: 2,
    title: "Cadastre seu Restaurante",
    path: "/planos",
  },
  {
    id: 3,
    title: "Criar Conta",
    path: "/cadastro",
  },
  {
    id: 4,
    title: "Entrar",
    path: "/entrar",
  },
];

export default function NavBar() {
  const router = useRouter();

  const isMobileVersion = useBreakpointValue({
    base: true,
    md: false,
  });
  const isTabletVersion = useBreakpointValue({
    base: true,
    md: true,
    lg: false,
  });

  function PrimaryButton({ title, isActive }: IButton) {
    return (
      <Button
        variant="solid"
        backgroundColor={isActive ? "blue.700" : "blue.900"}
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

  function SecondaryButton({ title, isActive }: IButton) {
    const theme = useTheme();

    return (
      <Button
        variant="outline"
        color={isActive ? "green.50" : "blue.900"}
        borderColor="blue.900"
        bg={isActive ? "blue.700" : "transparent"}
        _hover={{
          backgroundColor: `${hexToRgba(theme.colors.blue[900], "0.1")}`,
          color: "blue.900",
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

  function LinkButton({ title, isActive }: IButton) {
    return (
      <Button
        p={2}
        h={8}
        borderRadius={0}
        borderBottomWidth={2}
        borderColor={isActive ? "blue.900" : "transparent"}
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
                <MenuItem key={item.id} as="a" href={item.path}>
                  <Text>{item.title}</Text>
                </MenuItem>
              ) : null;
            }

            return (
              <Flex key={item.id}>
                <MenuItem
                  as="a"
                  href={item.path}
                  bg={
                    router.pathname === item.path ? "blue.900" : "transparent"
                  }
                >
                  <Text>{item.title}</Text>
                </MenuItem>
                {item.id === 2 ? <MenuDivider /> : null}
              </Flex>
            );
          })}
        </MenuList>
      </Menu>
    );
  }

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
            <Link href="/">
              <LinkButton title="Início" isActive={router.pathname === "/"} />
            </Link>
            <Link href="/restaurantes">
              <LinkButton
                title="Faça um Pedido"
                isActive={router.pathname === "/restaurantes"}
              />
            </Link>
            <Link href="/planos">
              <LinkButton
                title="Cadastre seu Restaurante"
                isActive={router.pathname === "/planos"}
              />
            </Link>
          </>
        )}
      </Flex>
      {isTabletVersion ? (
        <MobileMenu version={isMobileVersion ? "mobile" : "tablet"} />
      ) : (
        <Flex gap={5}>
          <Link href="/cadastro">
            <SecondaryButton
              title="Criar Conta"
              isActive={router.pathname === "/cadastro"}
            />
          </Link>
          <Link href="/entrar">
            <PrimaryButton
              title="Entrar"
              isActive={router.pathname === "/entrar"}
            />
          </Link>
        </Flex>
      )}
    </Flex>
  );
}
