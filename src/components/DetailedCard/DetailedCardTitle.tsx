import React from "react";
import { useDetailedCardContext } from "../../hooks/useDetailedCardContext";

function DetailedCardTitle() {
  const data = useDetailedCardContext();

  return <h2 className="text-2xl">{data.strDrink}</h2>;
}

export default DetailedCardTitle;
