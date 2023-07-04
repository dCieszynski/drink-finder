import React from "react";
import { useDetailedCardContext } from "../../hooks/useDetailedCardContext";

function DetailedCardInstructions() {
  const data = useDetailedCardContext();

  return (
    <div>
      <h3>Instructions</h3>
      <div className="text-xs">{data.strInstructions}</div>
    </div>
  );
}

export default DetailedCardInstructions;
