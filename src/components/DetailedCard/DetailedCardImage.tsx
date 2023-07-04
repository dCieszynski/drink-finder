import React from "react";
import { useDetailedCardContext } from "../../hooks/useDetailedCardContext";

function DetailedCardImage() {
  const data = useDetailedCardContext();

  return (
    <div className="min-w-[320px] md:mt-11">
      <img src={data.strDrinkThumb} alt={data.strDrink} className="w-full h-full object-cover md:rounded-t-2xl" />
    </div>
  );
}

export default DetailedCardImage;
