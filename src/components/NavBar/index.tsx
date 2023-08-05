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
import Button from "../Form/Button";

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
      zIndex={2}
    >
      <Flex alignItems="center" gap={5}>
        <Link href="/">
          <Image src="icons/logo-1bite.svg" w={16} h={16} />
        </Link>
        {isMobileVersion ? null : (
          <>
            <Link href="/">
              <Button
                title="Início"
                isActive={router.pathname === "/"}
                variant="link"
              />
            </Link>
            <Link href="/restaurantes">
              <Button
                title="Faça um Pedido"
                isActive={router.pathname === "/restaurantes"}
                variant="link"
              />
            </Link>
            <Link href="/planos">
              <Button
                title="Cadastre seu Restaurante"
                isActive={router.pathname === "/planos"}
                variant="link"
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
            <Button
              title="Criar Conta"
              isActive={router.pathname === "/cadastro"}
              variant="outline"
            />
          </Link>
          <Link href="/entrar">
            <Button
              title="Entrar"
              isActive={router.pathname === "/entrar"}
              variant="solid"
            />
          </Link>
        </Flex>
      )}
    </Flex>
  );
}
