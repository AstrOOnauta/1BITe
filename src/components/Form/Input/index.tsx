/* eslint-disable react/require-default-props */
/* eslint-disable react/display-name */
import { forwardRef } from "react";
import { Input as ChakraInput, InputProps, useTheme } from "@chakra-ui/react";

import { hexToRgba } from "~/shared/utils/hexToRgba";

interface IInput extends InputProps {
  error?: boolean;
}

const Input = forwardRef<HTMLInputElement, IInput>((props, ref) => {
  const theme = useTheme();

  return (
    <ChakraInput
      textColor="blue.900"
      borderColor={props.error ? "red.500" : "blue.900"}
      _hover={{
        borderColor: props.error ? "red.500" : "blue.600",
        bg: `${hexToRgba(
          props.error ? theme.colors.red[500] : theme.colors.blue[900],
          "0.1"
        )}`,
      }}
      _focus={{
        outline: "none",
        boxShadow: "none",
        borderColor: props.error ? "red.500" : "blue.600",
        borderWidth: 2,
        bg: `${hexToRgba(
          props.error ? theme.colors.red[500] : theme.colors.blue[900],
          "0.1"
        )}`,
      }}
      {...props}
      ref={ref}
    />
  );
});

export default Input;
