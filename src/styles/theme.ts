import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const colors = {};

const customTheme = extendTheme({ config, colors });

export default customTheme;
