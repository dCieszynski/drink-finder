import React, { PropsWithChildren } from "react";
import CardHeader from "./CardHeader";
import CardBackground from "./CardBackground";
import CardContext from "../../context/CardContext";
import { TCardContext } from "../../types/types";

type Props = PropsWithChildren & {
  data: TCardContext;
};

function Card({ data, children }: Props) {
  return (
    <CardContext.Provider value={data}>
      <div className="relative w-[224px] h-[282px]">{children}</div>
    </CardContext.Provider>
  );
}

Card.Background = CardBackground;
Card.Header = CardHeader;

export default Card;
