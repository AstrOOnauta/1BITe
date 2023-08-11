"use client";

/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable sonarjs/no-duplicate-string */
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  Flex,
  Image,
  Stack,
  Text,
  theme,
  useBreakpointValue,
} from "@chakra-ui/react";
import {
  MdAccessTime,
  MdAccessTimeFilled,
  MdClose,
  MdFastfood,
  MdInsertChart,
  MdInsertChartOutlined,
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
  MdOutlineFastfood,
  MdOutlineSettings,
  MdPeople,
  MdPeopleOutline,
  MdSettings,
  MdStar,
  MdStarOutline,
} from "react-icons/md";

import Button from "../Form/Button";

interface SideBarProps {
  closeDrawer?: () => void;
}

export default function SideBar({ closeDrawer }: SideBarProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  const router = useRouter();
  const { restaurantId } = router.query;

  const isTabletVersion = useBreakpointValue({
    base: true,
    md: true,
    lg: false,
  });

  const ROUTE_BUTTONS_DATA = [
    {
      id: 0,
      role: "owner,manager",
      path: `/${restaurantId}/dashboard`,
      title: "Resumo",
      icon: <MdInsertChartOutlined size={24} color={theme.colors.blue[900]} />,
      activatedIcon: <MdInsertChart size={24} color={theme.colors.green[50]} />,
    },
    {
      id: 1,
      role: "all",
      path: `/${restaurantId}/dashboard/pedidos`,
      title: "Pedidos",
      icon: <MdStarOutline size={24} color={theme.colors.blue[900]} />,
      activatedIcon: <MdStar size={24} color={theme.colors.green[50]} />,
    },
    {
      id: 2,
      role: "all",
      path: `/${restaurantId}/dashboard/historico`,
      title: "Histórico",
      icon: <MdAccessTime size={24} color={theme.colors.blue[900]} />,
      activatedIcon: (
        <MdAccessTimeFilled size={24} color={theme.colors.green[50]} />
      ),
    },
    {
      id: 3,
      role: "owner,manager",
      path: `/${restaurantId}/dashboard/cardapio`,
      title: "Cardápio",
      icon: <MdOutlineFastfood size={24} color={theme.colors.blue[900]} />,
      activatedIcon: <MdFastfood size={24} color={theme.colors.green[50]} />,
    },
    {
      id: 4,
      role: "owner,manager",
      path: `/${restaurantId}/dashboard/funcionarios`,
      title: "Funcionários",
      icon: <MdPeopleOutline size={24} color={theme.colors.blue[900]} />,
      activatedIcon: <MdPeople size={24} color={theme.colors.green[50]} />,
    },
    {
      id: 5,
      role: "owner,manager",
      path: `/${restaurantId}/dashboard/configuracoes`,
      title: "Configurações",
      icon: <MdOutlineSettings size={24} color={theme.colors.blue[900]} />,
      activatedIcon: <MdSettings size={24} color={theme.colors.green[50]} />,
    },
  ];

  function handleSideBar() {
    setIsExpanded(!isExpanded);
  }

  useEffect(() => {
    if (isTabletVersion) {
      setIsExpanded(true);
    }
  }, [isTabletVersion]);

  return (
    <Stack
      w={isTabletVersion ? "100%" : isExpanded ? "200px" : "60px"}
      maxW={isTabletVersion ? "100%" : "200px"}
      bg="green.50"
      minH="100vh"
      alignItems="center"
      py={8}
      boxShadow="xl"
      position="relative"
    >
      <Image
        src="/icons/logo-1bite.svg"
        w={isTabletVersion ? 32 : isExpanded ? 16 : 12}
        h={isTabletVersion ? 32 : isExpanded ? 16 : 12}
        mx={2}
        mb={isExpanded ? 20 : 24}
      />
      {ROUTE_BUTTONS_DATA.map((item) => {
        return (
          <Link
            href={`${item.path}`}
            key={item.id}
            style={{ width: "100%", marginBottom: 8 }}
          >
            <Button
              colorScheme="none"
              bg={router.asPath === item.path ? "blue.900" : "green.300"}
              w="100%"
              borderRadius={0}
              alignItems="center"
              justifyContent="center"
              _hover={{ opacity: 0.8 }}
              _active={{ opacity: 0.6 }}
            >
              <Flex gap={2} w={isExpanded ? "140px" : "100%"}>
                {router.asPath === item.path ? item.activatedIcon : item.icon}
                {isExpanded ? (
                  <Text
                    color={
                      router.asPath === item.path ? "green.50" : "blue.900"
                    }
                  >
                    {item.title}
                  </Text>
                ) : null}
              </Flex>
            </Button>
          </Link>
        );
      })}
      {isTabletVersion ? (
        <Button
          colorScheme="none"
          bg="green.300"
          borderRadius="full"
          size="md"
          p={0}
          boxShadow="md"
          position="absolute"
          right={-5}
          top={10}
          onClick={closeDrawer}
        >
          <MdClose size={24} />
        </Button>
      ) : (
        <Button
          colorScheme="none"
          bg="green.300"
          borderRadius="full"
          size="md"
          p={0}
          boxShadow="md"
          position="absolute"
          right={-5}
          bottom={10}
          onClick={handleSideBar}
        >
          {isExpanded ? (
            <MdKeyboardDoubleArrowLeft size={24} />
          ) : (
            <MdKeyboardDoubleArrowRight size={24} />
          )}
        </Button>
      )}
    </Stack>
  );
}
