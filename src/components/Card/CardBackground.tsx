import React from "react";
import { useCardContext } from "../../context/CardContext";

function CardBackground() {
  const { imageUrl, title } = useCardContext();
  return <img src={imageUrl} alt={title} className="w-full h-full object-cover rounded-xl" />;
}

export default CardBackground;
