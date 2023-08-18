/* eslint-disable react/display-name */
/* eslint-disable react/require-default-props */
import { forwardRef } from "react";
import {
  Button as ChakraButton,
  ButtonProps,
  useTheme,
} from "@chakra-ui/react";

import { hexToRgba } from "~/shared/utils/hexToRgba";

interface IButton extends ButtonProps {
  title?: string;
  isActive?: boolean;
}
const Button = forwardRef<HTMLInputElement, IButton>((props, ref) => {
  const theme = useTheme();

  const solidProps = {
    backgroundColor: props.isActive ? "blue.700" : "blue.900",
    color: "green.50",
    _hover: {
      backgroundColor: "blue.700",
    },
    _active: {
      backgroundColor: "blue.700",
    },
  };

  const outlineProps = {
    color: props.isActive ? "green.50" : "blue.900",
    borderColor: "blue.900",
    bg: props.isActive ? "blue.700" : "transparent",
    _active: {
      color: props.isActive ? "green.50" : "blue.500",
      borderColor: "blue.500",
    },
    _hover: {
      backgroundColor: `${hexToRgba(theme.colors.blue[900], "0.1")}`,
      color: "blue.900",
    },
  };

  const linkProps = {
    p: 2,
    h: 8,
    borderRadius: 0,
    borderBottomWidth: 2,
    borderColor: props.isActive ? "blue.900" : "transparent",
    bg: "none",
    color: "blue.900",
    _hover: {
      color: "blue.900",
      borderRadius: 0,
      borderBottomWidth: 2,
      borderColor: "blue.900",
    },
    _active: {
      color: "blue.600",
      borderRadius: 0,
      borderBottomWidth: 2,
      borderColor: "blue.600",
    },
  };

  function getVariantProps() {
    return props.variant === "solid"
      ? solidProps
      : props.variant === "outline"
      ? outlineProps
      : props.variant === "link"
      ? linkProps
      : null;
  }

  return (
    <ChakraButton {...getVariantProps()} {...props} ref={ref}>
      {props.children || props.title}
    </ChakraButton>
  );
});

export default Button;
