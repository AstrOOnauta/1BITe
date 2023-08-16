import { useState } from "react";
import type { NextPage } from "next";
import { Flex, Stack } from "@chakra-ui/react";
import Button from "~/components/Form/Button";
import DailyDashboardHome from "~/modules/DashboardHome/Daily";
import WeeklyDashboardHome from "~/modules/DashboardHome/Weekly";

const PERIOD_BUTTONS_DATA = [
  {
    id: 0,
    period: "daily",
    title: "Diário",
  },
  {
    id: 1,
    period: "weekly",
    title: "Semanal",
  },
  {
    id: 2,
    period: "monthly",
    title: "Mensal",
  },
];

const DashboardHome: NextPage = () => {
  const [period, setPeriody] = useState("daily");

  return (
    <Stack flex={1} p={7} overflowY="auto">
      <Flex
        alignSelf="center"
        overflowY="auto"
        bg="green.300"
        borderRadius="full"
        boxShadow="md"
        mb={10}
        minH={10}
      >
        {PERIOD_BUTTONS_DATA.map((item) => {
          return (
            <Button
              key={item.id}
              variant={period === item.period ? "solid" : "none"}
              color={period === item.period ? "green.50" : "blue.900"}
              title={item.title}
              borderRadius="full"
              onClick={() => setPeriody(item.period)}
            />
          );
        })}
      </Flex>
      {period === "daily" ? (
        <DailyDashboardHome />
      ) : period === "weekly" ? (
        <WeeklyDashboardHome />
      ) : null}
    </Stack>
  );
};

export default DashboardHome;
