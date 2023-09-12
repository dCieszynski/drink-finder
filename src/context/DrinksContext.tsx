import React, { PropsWithChildren, createContext, useContext, useMemo, useState } from "react";
import { TDrinksContext, TFilter } from "../types/types";
import { useDrinks } from "../hooks/useDrinks";

const DrinksContext = createContext<TDrinksContext | null>(null);

export function DrinksContextProvider({ children }: PropsWithChildren) {
  const [filter, setFilter] = useState<TFilter>("alcoholic");
  const [searchInput, setSearchInput] = useState("");
  const drinksList = useDrinks(filter, searchInput);

  const valueMemo = useMemo(
    () => ({ list: drinksList, searchInput, setSearchInput, filter, setFilter }),
    [drinksList, searchInput, setSearchInput, filter, setFilter]
  );

  return <DrinksContext.Provider value={valueMemo}>{children}</DrinksContext.Provider>;
}

export const useDrinksContext = () => {
  const context = useContext(DrinksContext);

  return context;
};

export default DrinksContext;
