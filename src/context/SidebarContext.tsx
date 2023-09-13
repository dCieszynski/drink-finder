import React, { PropsWithChildren, createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { TFilter, TSidebarContext } from "../types/types";
import { useDrinksContext } from "./DrinksContext";

const SidebarContext = createContext<TSidebarContext | null>(null);

export function SidebarContextProvider({ children }: PropsWithChildren) {
  const drinkContext = useDrinksContext();
  const [activeButtonTitle, setActiveButtonTitle] = useState<string>("");

  const changeActiveButtonTitle = useCallback(
    (newActvieButtonTitle: string) => {
      setActiveButtonTitle(newActvieButtonTitle);
    },
    [setActiveButtonTitle]
  );

  useEffect(() => {
    drinkContext?.setFilter(activeButtonTitle !== "" ? (activeButtonTitle.toLowerCase().replaceAll(/[\s-]/g, "_") as TFilter) : "alcoholic");
  }, [drinkContext, activeButtonTitle]);

  const valueMemo = useMemo(() => ({ activeButtonTitle, changeActiveButtonTitle }), [activeButtonTitle, changeActiveButtonTitle]);

  return <SidebarContext.Provider value={valueMemo}>{children}</SidebarContext.Provider>;
}

export const useSidebarContext = () => {
  const context = useContext(SidebarContext);

  if (!context) {
    throw new Error("useSidebarContext must be used within a SidebarContext.Provider");
  }

  return context;
};

export default SidebarContext;
