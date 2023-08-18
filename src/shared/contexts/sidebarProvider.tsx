/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { createContext } from "react";

import useLocalStorage from "../hooks/useLocalStorage";
import { ChildrenInterface } from "../interfaces/general/childrenNode";

type isExpandedType = boolean;

type PropsSidebarContext = {
  isExpanded: isExpandedType;
  setIsExpanded: (value: boolean) => void;
};

const DEFAULT_VALUE = {
  isExpanded: true,
  setIsExpanded: () => {},
};

const SidebarContext = createContext<PropsSidebarContext>(DEFAULT_VALUE);

const SidebarContextProvider: React.FC<ChildrenInterface> = ({ children }) => {
  const [isExpanded, setIsExpanded] = useLocalStorage(
    "isSidebarExpanded",
    DEFAULT_VALUE.isExpanded
  );

  return (
    <SidebarContext.Provider
      value={{
        isExpanded,
        setIsExpanded,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
export { SidebarContextProvider };
export default SidebarContext;
