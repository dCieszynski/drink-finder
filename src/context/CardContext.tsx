import { createContext, useContext } from "react";
import { TCardContext } from "../types/types";

const CardContext = createContext<TCardContext | null>(null);

export function useCardContext() {
  const context = useContext(CardContext);

  if (!context) {
    throw new Error("useCardContext must be used within a CardContextProvider");
  }

  return context;
}

export default CardContext;
