/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable consistent-return */
/* eslint-disable sonarjs/no-duplicate-string */
import type { NextPage } from "next";
import {
  Flex,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Badge,
  Avatar,
  useBreakpointValue,
  Stack,
  Image,
} from "@chakra-ui/react";

import Button from "~/components/Form/Button";
import { Roles } from "~/shared/enums/roles";
import { Status } from "~/shared/enums/status";
import { MdChevronRight } from "react-icons/md";
import Link from "next/link";

const MY_RESTAURANTS_DATA = [
  {
    id: 0,
    imageUrl:
      "https://sun6-22.userapi.com/s/v1/ig2/5AyY8IQMW4ALly0KasvVMhySwMl_OITbhIQkay-57f0g9aq5yuw54nJCiWQIN0fUfBVCL0pDLYNunn3PGnhQUEji.jpg?size=741x741&quality=95&crop=0,0,741,741&ava=1",
    name: "The Prancing Pony",
    role: "owner",
    status: "active",
  },
  {
    id: 1,
    imageUrl:
      "https://frenchtoastsunday.com/wp-content/uploads/2014/03/the-prancing-pony-26.jpg",
    name: "The Prancing Pony 2",
    role: "owner",
    status: "pending-payment",
  },
  {
    id: 2,
    imageUrl:
      "https://sun6-22.userapi.com/s/v1/ig2/5AyY8IQMW4ALly0KasvVMhySwMl_OITbhIQkay-57f0g9aq5yuw54nJCiWQIN0fUfBVCL0pDLYNunn3PGnhQUEji.jpg?size=741x741&quality=95&crop=0,0,741,741&ava=1",
    name: "The Prancing Pony",
    role: "waiter",
    status: "active",
  },
  {
    id: 3,
    imageUrl:
      "https://frenchtoastsunday.com/wp-content/uploads/2014/03/the-prancing-pony-26.jpg",
    name: "The Prancing Pony 2",
    role: "manager",
    status: "inactive",
  },
  {
    id: 4,
    imageUrl:
      "https://frenchtoastsunday.com/wp-content/uploads/2014/03/the-prancing-pony-26.jpg",
    name: "The Prancing Pony 2",
    role: "attendant",
    status: "inactive",
  },
];

const MyRestaurants: NextPage = () => {
  const isMobileVersion = useBreakpointValue({
    base: true,
    md: false,
  });

  function createBadgeBackground(status: string) {
    if (status === "active") {
      return "blue.900";
    }
    if (status === "pending-payment") {
      return "red.500";
    }
    if (status === "inactive") {
      return "gray.400";
    }
  }

  return (
    <Flex
      alignSelf="center"
      justifyContent="center"
      flexDirection="column"
      w="100%"
      maxW="1400px"
      mt={10}
    >
      {MY_RESTAURANTS_DATA.some((item) => item.role === "owner") ? (
        <Flex w="100%" flexDirection="column" mb={isMobileVersion ? 8 : 16}>
          <Text color="blue.900" fontWeight="bold" mb={4}>
            Meus Restaurantes
          </Text>
          {isMobileVersion ? (
            MY_RESTAURANTS_DATA.filter((item) => item.role === "owner").map(
              (item) => {
                return (
                  <Stack
                    key={item.id}
                    opacity={item.status !== "active" ? 0.5 : 1}
                  >
                    <Link
                      href={
                        item.status !== "active" ? "" : `/${item.id}/dashboard`
                      }
                    >
                      <Flex
                        alignItems="center"
                        bg="green.50"
                        position="relative"
                        h="120px"
                        boxShadow="md"
                      >
                        <Image
                          w="100px"
                          height="100%"
                          borderLeftRadius={6}
                          objectFit="cover"
                          src={item.imageUrl}
                          alt="restaurant picture"
                        />
                        <Stack
                          flex={1}
                          justifyContent="space-between"
                          h="100%"
                          px={2}
                          py={3}
                        >
                          <Stack>
                            <Text
                              fontWeight="bold"
                              lineHeight={1}
                              color="blue.900"
                            >
                              {item.name}
                            </Text>
                          </Stack>

                          <Flex justifyContent="space-between">
                            <Badge
                              bg={createBadgeBackground(item.status)}
                              color="white"
                              borderRadius="full"
                              px={4}
                              py={0.5}
                            >
                              {Status[item.status]}
                            </Badge>
                            <MdChevronRight size={24} color="blue.900" />
                          </Flex>
                        </Stack>
                      </Flex>
                    </Link>
                    <Flex h={2} />
                  </Stack>
                );
              }
            )
          ) : (
            <TableContainer w="100%">
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Restaurante</Th>
                    <Th>Status</Th>
                    <Th />
                  </Tr>
                </Thead>
                <Tbody>
                  {MY_RESTAURANTS_DATA.filter(
                    (item) => item.role === "owner"
                  ).map((item) => {
                    return (
                      <Tr key={item.id}>
                        <Th py={2} textTransform="none">
                          <Flex alignItems="center" gap={2}>
                            <Avatar
                              size="sm"
                              src={item.imageUrl}
                              name={`${item.name} image`}
                            />
                            <Text fontSize="md">{item.name}</Text>
                          </Flex>
                        </Th>
                        <Td py={2}>
                          <Badge
                            bg={createBadgeBackground(item.status)}
                            color="white"
                            borderRadius="full"
                            px={4}
                            py={0.5}
                          >
                            {Status[item.status]}
                          </Badge>
                        </Td>
                        <Td py={2}>
                          <Flex justifyContent="flex-end">
                            <Link href={`/${item.id}/dashboard`}>
                              <Button
                                isDisabled={item.status !== "active"}
                                variant="solid"
                                title="Entrar"
                                px={16}
                              />
                            </Link>
                          </Flex>
                        </Td>
                      </Tr>
                    );
                  })}
                </Tbody>
              </Table>
            </TableContainer>
          )}
        </Flex>
      ) : null}
      {MY_RESTAURANTS_DATA.some((item) => item.role !== "owner") ? (
        <Flex w="100%" flexDirection="column">
          <Text color="blue.900" fontWeight="bold" mb={4}>
            Restaurantes Que Faço Parte
          </Text>
          {isMobileVersion ? (
            MY_RESTAURANTS_DATA.filter((item) => item.role !== "owner").map(
              (item) => {
                return (
                  <Stack
                    key={item.id}
                    opacity={item.status !== "active" ? 0.5 : 1}
                  >
                    <Link
                      href={
                        item.status !== "active" ? "" : `/${item.id}/dashboard`
                      }
                    >
                      <Flex
                        alignItems="center"
                        bg="green.50"
                        position="relative"
                        h="120px"
                        boxShadow="md"
                      >
                        <Image
                          w="100px"
                          height="100%"
                          borderLeftRadius={6}
                          objectFit="cover"
                          src={item.imageUrl}
                          alt="restaurant picture"
                        />
                        <Stack
                          flex={1}
                          justifyContent="space-between"
                          h="100%"
                          px={2}
                          py={3}
                        >
                          <Stack>
                            <Text
                              fontWeight="bold"
                              lineHeight={1}
                              color="blue.900"
                            >
                              {item.name}
                            </Text>
                            <Text fontWeight="medium" lineHeight={1}>
                              {Roles[item.role]}
                            </Text>
                          </Stack>

                          <Flex justifyContent="space-between">
                            <Badge
                              bg={createBadgeBackground(item.status)}
                              color="white"
                              borderRadius="full"
                              px={4}
                              py={0.5}
                            >
                              {Status[item.status]}
                            </Badge>
                            <MdChevronRight size={24} color="blue.900" />
                          </Flex>
                        </Stack>
                      </Flex>
                    </Link>
                    <Flex h={2} />
                  </Stack>
                );
              }
            )
          ) : (
            <TableContainer w="100%">
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Restaurante</Th>
                    <Th>Cargo</Th>
                    <Th>Status</Th>
                    <Th />
                  </Tr>
                </Thead>
                <Tbody>
                  {MY_RESTAURANTS_DATA.filter(
                    (item) => item.role !== "owner"
                  ).map((item) => {
                    return (
                      <Tr key={item.id}>
                        <Th py={2} textTransform="none">
                          <Flex alignItems="center" gap={2}>
                            <Avatar
                              size="sm"
                              src={item.imageUrl}
                              name={`${item.name} image`}
                            />
                            <Text fontSize="md">{item.name}</Text>
                          </Flex>
                        </Th>
                        <Td py={2}>
                          <Text>{Roles[item.role]}</Text>
                        </Td>
                        <Td py={2}>
                          <Badge
                            bg={createBadgeBackground(item.status)}
                            color="white"
                            borderRadius="full"
                            px={4}
                            py={0.5}
                          >
                            {Status[item.status]}
                          </Badge>
                        </Td>
                        <Td py={2}>
                          <Flex justifyContent="flex-end">
                            <Link href={`/${item.id}/dashboard`}>
                              <Button
                                isDisabled={item.status !== "active"}
                                variant="solid"
                                title="Entrar"
                                px={16}
                              />
                            </Link>
                          </Flex>
                        </Td>
                      </Tr>
                    );
                  })}
                </Tbody>
              </Table>
            </TableContainer>
          )}
        </Flex>
      ) : null}
    </Flex>
  );
};

export default MyRestaurants;
