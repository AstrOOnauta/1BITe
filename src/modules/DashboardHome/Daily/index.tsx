/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable react/jsx-no-bind */
import { useState, useEffect } from "react";
import {
  Flex,
  Stack,
  useBreakpointValue,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverCloseButton,
  Select,
  Text,
  theme,
} from "@chakra-ui/react";
import {
  MdAttachMoney,
  MdChevronLeft,
  MdChevronRight,
  MdDeliveryDining,
  MdFilterList,
  MdHome,
  MdStar,
} from "react-icons/md";
import DatePicker from "react-datepicker";
import { addDays, addHours, format, parseISO } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import {
  BarChart,
  Bar,
  Label,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import Button from "~/components/Form/Button";
import Input from "~/components/Form/Input";
import { hexToRgba } from "~/shared/utils/hexToRgba";

const CARDS_DATA = [
  {
    id: 0,
    title: "Faturamento Total",
    value: "R$ 3.705,00",
    icon: <MdAttachMoney size={64} color={theme.colors.blue[900]} />,
    laptopIcon: <MdAttachMoney size={48} color={theme.colors.blue[900]} />,
  },
  {
    id: 1,
    title: "Total de Pedidos",
    value: "373",
    icon: <MdStar size={64} color={theme.colors.blue[900]} />,
    laptopIcon: <MdStar size={48} color={theme.colors.blue[900]} />,
  },
  {
    id: 2,
    title: "Pedidos - Delivery",
    value: "344",
    icon: <MdDeliveryDining size={64} color={theme.colors.blue[900]} />,
    laptopIcon: <MdDeliveryDining size={48} color={theme.colors.blue[900]} />,
  },
  {
    id: 3,
    title: "Pedidos - Presencial",
    value: "129",
    icon: <MdHome size={64} color={theme.colors.blue[900]} />,
    laptopIcon: <MdHome size={48} color={theme.colors.blue[900]} />,
  },
];

const GRAPH_DATA = [
  { date: "2023-08-15T03:00:00.000Z", value: 0 },
  { date: "2023-08-15T04:00:00.000Z", value: 0 },
  { date: "2023-08-15T05:00:00.000Z", value: 0 },
  { date: "2023-08-15T06:00:00.000Z", value: 0 },
  { date: "2023-08-15T07:00:00.000Z", value: 0 },
  { date: "2023-08-15T08:00:00.000Z", value: 0 },
  { date: "2023-08-15T09:00:00.000Z", value: 0 },
  { date: "2023-08-15T10:00:00.000Z", value: 0 },
  { date: "2023-08-15T11:00:00.000Z", value: 0 },
  { date: "2023-08-15T12:00:00.000Z", value: 0 },
  { date: "2023-08-15T13:00:00.000Z", value: 0 },
  { date: "2023-08-15T14:00:00.000Z", value: 0 },
  { date: "2023-08-15T15:00:00.000Z", value: 0 },
  { date: "2023-08-15T16:00:00.000Z", value: 0 },
  { date: "2023-08-15T17:00:00.000Z", value: 0 },
  { date: "2023-08-15T18:00:00.000Z", value: 0 },
  { date: "2023-08-15T19:00:00.000Z", value: 0 },
  { date: "2023-08-15T20:00:00.000Z", value: 0 },
  { date: "2023-08-15T21:00:00.000Z", value: 100 },
  { date: "2023-08-15T22:00:00.000Z", value: 150 },
  { date: "2023-08-15T23:00:00.000Z", value: 400 },
  { date: "2023-08-16T00:00:00.000Z", value: 800 },
  { date: "2023-08-16T01:00:00.000Z", value: 600 },
  { date: "2023-08-16T02:00:00.000Z", value: 400 },
];

export default function DailyDashboardHome() {
  const [init, setInit] = useState(false);
  const [date, setDate] = useState<Date | null>(new Date());

  const isMobileVersion = useBreakpointValue({
    base: true,
    md: false,
  });

  const isTabletVersion = useBreakpointValue({
    base: true,
    md: true,
    lg: false,
  });

  const isLaptopVersion = useBreakpointValue({
    base: true,
    md: true,
    lg: true,
    xl: true,
    "2xl": false,
  });

  function nextDay() {
    if (date) {
      setDate(addDays(date, 1));
    }
  }

  function previousDay() {
    if (date) {
      setDate(addDays(date, -1));
    }
  }

  useEffect(() => {
    setInit(true);
  }, []);

  return (
    <Stack flex={1}>
      <Flex
        justifyContent="space-between"
        flexDirection={isMobileVersion ? "column" : "row"}
        gap={2}
      >
        <Flex gap={1} alignSelf="center">
          <Button variant="solid" p={0} onClick={previousDay}>
            <MdChevronLeft size={24} color="blue.900" />
          </Button>
          <DatePicker
            locale={ptBR}
            dateFormat="dd 'de' MMMM 'de' yyyy"
            selected={date}
            onChange={setDate}
            todayButton="Escolher Hoje"
            customInput={<Input />}
          />
          <Button variant="solid" p={0} onClick={nextDay}>
            <MdChevronRight size={24} color="blue.900" />
          </Button>
        </Flex>
        <Popover isLazy placement="bottom-start">
          <PopoverTrigger>
            <Button variant="solid" gap={2}>
              <MdFilterList size={24} color="blue.900" />
              <Text>Filtro</Text>
            </Button>
          </PopoverTrigger>
          <PopoverContent p={0} bg="green.50" boxShadow="md">
            <PopoverCloseButton />
            <PopoverBody p={6}>
              <Stack mb={2}>
                <Text mb={-2} fontWeight="semibold">
                  Cliente
                </Text>
                <Select
                  placeholder="Todos"
                  size="md"
                  borderColor="blue.900"
                  iconColor="blue.900"
                  _hover={{
                    borderColor: "blue.600",
                    bg: `${hexToRgba(theme.colors.blue[900], "0.1")}`,
                  }}
                  _focus={{
                    outline: "none",
                    boxShadow: "none",
                    borderColor: "blue.600",
                    bg: `${hexToRgba(theme.colors.blue[900], "0.1")}`,
                  }}
                />
              </Stack>
              <Stack mb={4}>
                <Text mb={-2} fontWeight="semibold">
                  Funcionário
                </Text>
                <Select
                  placeholder="Todos"
                  size="md"
                  borderColor="blue.900"
                  iconColor="blue.900"
                  _hover={{
                    borderColor: "blue.600",
                    bg: `${hexToRgba(theme.colors.blue[900], "0.1")}`,
                  }}
                  _focus={{
                    outline: "none",
                    boxShadow: "none",
                    borderColor: "blue.600",
                    bg: `${hexToRgba(theme.colors.blue[900], "0.1")}`,
                  }}
                />
              </Stack>
              <Flex w="100%" justifyContent="space-between">
                <Button variant="outline" title="Limpar" w="48%" />
                <Button variant="solid" title="Filtrar" w="48%" />
              </Flex>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Flex>
      <Flex
        flexDirection={isMobileVersion ? "column" : "row"}
        justifyContent="center"
        py={isMobileVersion ? 6 : isTabletVersion ? 8 : isLaptopVersion ? 6 : 8}
        gap={
          isMobileVersion ? 4 : isTabletVersion ? 8 : isLaptopVersion ? 6 : 8
        }
        flexWrap="wrap"
      >
        {CARDS_DATA.map((item) => {
          return (
            <Flex
              key={item.id}
              bg="green.300"
              borderRadius={8}
              p={2}
              pr={isMobileVersion ? 4 : 6}
              minW={
                isMobileVersion
                  ? "100%"
                  : isTabletVersion
                  ? 340
                  : isLaptopVersion
                  ? 248
                  : 340
              }
              gap={2}
              alignItems="center"
              boxShadow="md"
            >
              {isTabletVersion
                ? item.icon
                : isLaptopVersion
                ? item.laptopIcon
                : item.icon}
              <Stack>
                <Text fontWeight="semibold" color="blue.900" mb={-3}>
                  {item.title}
                </Text>
                <Text
                  fontSize={
                    isTabletVersion ? "3xl" : isLaptopVersion ? "xl" : "3xl"
                  }
                  fontWeight="bold"
                  color="blue.900"
                >
                  {item.value}
                </Text>
              </Stack>
            </Flex>
          );
        })}
      </Flex>
      {init ? (
        <Stack w="100%" flex={1} position="relative">
          <Stack position="absolute" width="100%" height="100%">
            <ResponsiveContainer
              width="100%"
              height={isMobileVersion ? 260 : isLaptopVersion ? 420 : "100%"}
            >
              <BarChart
                width={500}
                height={300}
                data={GRAPH_DATA}
                margin={{
                  top: 5,
                  right: isMobileVersion ? 5 : 30,
                  left: 20,
                  bottom: 20,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="date"
                  tickFormatter={(item) => format(parseISO(item), "HH")}
                >
                  <Label
                    value="Horário (h)"
                    offset={-12}
                    position="insideBottom"
                  />
                </XAxis>
                <YAxis allowDecimals={false}>
                  <Label
                    value="Faturamento (R$)"
                    angle={-90}
                    position={
                      isMobileVersion ? "insideBottomLeft" : "insideLeft"
                    }
                  />
                </YAxis>
                <Tooltip
                  labelFormatter={(value) =>
                    `Horário : ${format(parseISO(value), "HH")}-${format(
                      addHours(parseISO(value), 1),
                      "HH"
                    )}h`
                  }
                  labelStyle={{
                    color: theme.colors.blue[900],
                    fontWeight: "bold",
                  }}
                  formatter={(value) => [
                    `R$ ${value.toLocaleString("pt-BR", {
                      minimumFractionDigits: 2,
                    })}`,
                    "Faturamento",
                  ]}
                  itemStyle={{
                    color: theme.colors.green[300],
                    fontWeight: "bold",
                  }}
                  contentStyle={{
                    backgroundColor: theme.colors.green[50],
                    borderColor: theme.colors.blue[900],
                    borderRadius: 4,
                    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
                  }}
                />
                <Bar dataKey="value" fill={theme.colors.blue[900]} />
              </BarChart>
            </ResponsiveContainer>
          </Stack>
        </Stack>
      ) : null}
    </Stack>
  );
}
