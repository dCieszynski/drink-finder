import React from "react";
import { BiDrink } from "react-icons/bi";
import { FaGlassCheers } from "react-icons/fa";
import { useDetailedCardContext } from "../../hooks/useDetailedCardContext";

function DetailedCardCategory() {
  const data = useDetailedCardContext();

  return (
    <div className="flex text-[10px] justify-center gap-6">
      <div className="flex items-center">
        <BiDrink className="text-[32px]" />
        {data.strAlcoholic}
      </div>
      <div className="w-[1px] h-[42px] bg-white rounded-2xl" />
      <div className="flex gap-2 items-center">
        <FaGlassCheers className="text-[32px]" />
        {data.strGlass}
      </div>
    </div>
  );
}

export default DetailedCardCategory;
