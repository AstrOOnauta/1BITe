/* eslint-disable react/display-name */
import { forwardRef } from "react";
import { Input as ChakraInput, InputProps, useTheme } from "@chakra-ui/react";

import { hexToRgba } from "~/shared/utils/hexToRgba";

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const theme = useTheme();

  return (
    <ChakraInput
      textColor="blue.900"
      borderColor="blue.900"
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
      {...props}
      ref={ref}
    />
  );
});

export default Input;
