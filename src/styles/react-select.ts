import { GroupBase, StylesConfig } from "react-select";
import { theme } from "@chakra-ui/react";

import { ReactSelectInterface } from "~/shared/interfaces/general/reactSelect";
import { hexToRgba } from "~/shared/utils/hexToRgba";

export const lightStyle: StylesConfig<ReactSelectInterface, false> = {
  container: (base) => ({
    ...base,
    flex: 1,
  }),
  input: (base) => ({ ...base, cursor: "text" }),
  control: (base, { isDisabled, isFocused }) => ({
    ...base,
    padding: 2,
    cursor: "pointer",
    borderRadius: 6,
    borderColor: isFocused ? theme.colors.blue[600] : theme.colors.blue[900],
    borderWidth: isFocused ? 2 : 1,
    backgroundColor: isFocused
      ? hexToRgba(theme.colors.blue[900], "0.1")
      : "transparent",
    boxShadow: "none",
    "&:hover": {
      borderColor: theme.colors.blue[600],
      backgroundColor: hexToRgba(theme.colors.blue[900], "0.1"),
    },
  }),
  dropdownIndicator: (base) => ({
    ...base,
    color: theme.colors.blue[900],
    "&:hover": {
      color: theme.colors.blue[600],
    },
  }),
  option: (base, { isDisabled, isFocused, isSelected }) => {
    return {
      ...base,
      backgroundColor: isSelected
        ? theme.colors.green[300]
        : isFocused
        ? theme.colors.green[300]
        : theme.colors.green[50],
      color: theme.colors.blue[900],
    };
  },
};

export const lightErrorStyle: StylesConfig<ReactSelectInterface, false> = {
  container: (base) => ({
    ...base,
    flex: 1,
  }),
  input: (base) => ({ ...base, cursor: "text" }),
  control: (base, { isDisabled, isFocused }) => ({
    ...base,
    padding: 2,
    cursor: "pointer",
    borderRadius: 6,
    borderColor: theme.colors.red[500],
    borderWidth: 2,
    backgroundColor: isFocused
      ? hexToRgba(theme.colors.red[500], "0.1")
      : "transparent",
    boxShadow: "none",
    "&:hover": {
      borderColor: theme.colors.red[600],
      backgroundColor: hexToRgba(theme.colors.red[500], "0.1"),
    },
  }),
  dropdownIndicator: (base) => ({
    ...base,
    color: theme.colors.blue[900],
    "&:hover": {
      color: theme.colors.blue[600],
    },
  }),
  option: (base, { isDisabled, isFocused, isSelected }) => {
    return {
      ...base,
      backgroundColor: isSelected
        ? theme.colors.green[300]
        : isFocused
        ? theme.colors.green[300]
        : theme.colors.green[50],
      color: theme.colors.blue[900],
    };
  },
};

export const lightMultiStyle: StylesConfig<
  ReactSelectInterface | GroupBase<ReactSelectInterface>,
  true
> = {
  container: (base) => ({
    ...base,
    flex: 1,
  }),
  input: (base) => ({ ...base, cursor: "text" }),
  control: (base, { isDisabled, isFocused }) => ({
    ...base,
    padding: 2,
    cursor: "pointer",
    borderRadius: 6,
    borderColor: isFocused ? theme.colors.blue[600] : theme.colors.blue[900],
    borderWidth: isFocused ? 2 : 1,
    backgroundColor: isFocused
      ? hexToRgba(theme.colors.blue[900], "0.1")
      : "transparent",
    boxShadow: "none",
    "&:hover": {
      borderColor: theme.colors.blue[600],
      backgroundColor: hexToRgba(theme.colors.blue[900], "0.1"),
    },
  }),
  dropdownIndicator: (base) => ({
    ...base,
    color: theme.colors.blue[900],
    "&:hover": {
      color: theme.colors.blue[600],
    },
  }),
  option: (base, { isDisabled, isFocused, isSelected }) => {
    return {
      ...base,
      backgroundColor: isSelected
        ? theme.colors.green[300]
        : isFocused
        ? theme.colors.green[300]
        : theme.colors.green[50],
      color: theme.colors.blue[900],
    };
  },
  multiValue: (base) => {
    return {
      ...base,
      backgroundColor: theme.colors.green[300],
      borderRadius: 20,
    };
  },
  multiValueLabel: (base) => {
    return {
      ...base,
      color: theme.colors.blue[900],
    };
  },
};

export const lightErrorMultiStyle: StylesConfig<
  ReactSelectInterface | GroupBase<ReactSelectInterface>,
  true
> = {
  container: (base) => ({
    ...base,
    flex: 1,
  }),
  input: (base) => ({ ...base, cursor: "text" }),
  control: (base, { isDisabled, isFocused }) => ({
    ...base,
    padding: 2,
    cursor: "pointer",
    borderRadius: 6,
    borderColor: theme.colors.red[500],
    borderWidth: 2,
    backgroundColor: isFocused
      ? hexToRgba(theme.colors.red[500], "0.1")
      : "transparent",
    boxShadow: "none",
    "&:hover": {
      borderColor: theme.colors.red[600],
      backgroundColor: hexToRgba(theme.colors.red[500], "0.1"),
    },
  }),
  dropdownIndicator: (base) => ({
    ...base,
    color: theme.colors.blue[900],
    "&:hover": {
      color: theme.colors.blue[600],
    },
  }),
  option: (base, { isDisabled, isFocused, isSelected }) => {
    return {
      ...base,
      backgroundColor: isSelected
        ? theme.colors.green[300]
        : isFocused
        ? theme.colors.green[300]
        : theme.colors.green[50],
      color: theme.colors.blue[900],
    };
  },
  multiValue: (base) => {
    return {
      ...base,
      backgroundColor: theme.colors.green[300],
      borderRadius: 20,
    };
  },
  multiValueLabel: (base) => {
    return {
      ...base,
      color: theme.colors.blue[900],
    };
  },
};
