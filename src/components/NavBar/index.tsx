/* eslint-disable array-callback-return */
/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Avatar,
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
import ProfileMenu from "../ProfileMenu";

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
];

const PUBLIC_MENU_DATA = [
  {
    id: 0,
    title: "Criar Conta",
    path: "/cadastro",
  },
  {
    id: 1,
    title: "Entrar",
    path: "/entrar",
  },
];

const PRIVATE_MENU_DATA = [
  {
    id: 0,
    title: "Perfil",
    path: "/profile",
  },
  {
    id: 1,
    title: "Meus Restaurantes",
    path: "/meus-restaurantes",
  },
];

export default function NavBar() {
  const [user] = useState(false);

  const theme = useTheme();
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

  function GeneralMenuList() {
    return (
      <>
        {MENU_DATA.map((item) => {
          return (
            <MenuItem
              key={item.id}
              as={Link}
              href={item.path}
              bg={router.pathname === item.path ? "blue.900" : "transparent"}
            >
              <Text
                color={router.pathname === item.path ? "green.50" : "blue.900"}
              >
                {item.title}
              </Text>
            </MenuItem>
          );
        })}
      </>
    );
  }

  function PublicMenuList() {
    return (
      <>
        {PUBLIC_MENU_DATA.map((item) => {
          return (
            <MenuItem
              key={item.id}
              as={Link}
              href={item.path}
              bg={router.pathname === item.path ? "blue.900" : "transparent"}
            >
              <Text
                color={router.pathname === item.path ? "green.50" : "blue.900"}
              >
                {item.title}
              </Text>
            </MenuItem>
          );
        })}
      </>
    );
  }

  function PrivateMenuList() {
    return (
      <>
        <MenuItem bg="transparent" isDisabled>
          <Flex w="100%" justifyContent="space-between">
            <Text>Usuário</Text>
            <Avatar size="xs" />
          </Flex>
        </MenuItem>
        {PRIVATE_MENU_DATA.map((item) => {
          return (
            <MenuItem
              key={item.id}
              as={Link}
              href={item.path}
              bg={router.pathname === item.path ? "blue.900" : "transparent"}
            >
              <Text
                color={router.pathname === item.path ? "green.50" : "blue.900"}
              >
                {item.title}
              </Text>
            </MenuItem>
          );
        })}
        <MenuItem as="button" onClick={() => null} bg="transparent">
          <Text color="blue.900">Sair</Text>
        </MenuItem>
      </>
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
        <MenuList bg="green.50" shadow="xl">
          {version === "mobile" ? (
            <>
              <GeneralMenuList />
              <MenuDivider />
              {user ? <PrivateMenuList /> : <PublicMenuList />}
            </>
          ) : version === "tablet" ? (
            user ? (
              <PrivateMenuList />
            ) : (
              <PublicMenuList />
            )
          ) : null}
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
        <Link href="/">
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
      ) : user ? (
        <ProfileMenu />
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
