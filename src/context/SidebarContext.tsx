import React, { PropsWithChildren, createContext, useCallback, useContext, useMemo, useState } from "react";
import { TSidebarContext } from "../types/types";

const SidebarContext = createContext<TSidebarContext | null>(null);

export function SidebarContextProvider({ children }: PropsWithChildren) {
  const [activeButtonTitle, setActiveButtonTitle] = useState<string>("");

  const changeActiveButtonTitle = useCallback(
    (newActvieButtonTitle: string) => {
      setActiveButtonTitle(newActvieButtonTitle);
    },
    [setActiveButtonTitle]
  );

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
