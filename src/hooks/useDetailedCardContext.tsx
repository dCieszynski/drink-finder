import { createContext, useContext } from "react";
import { TDrinkDetails } from "../types/types";

const DetailedCardContext = createContext<TDrinkDetails | null>(null);

export function useDetailedCardContext() {
  const context = useContext(DetailedCardContext);

  if (!context) {
    throw new Error("useDetailedtCardContext must be used within a DetailedCardContextProvider");
  }

  return context;
}

export default DetailedCardContext;
