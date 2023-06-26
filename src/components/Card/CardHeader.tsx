import React from "react";
import { Link } from "react-router-dom";
import { useCardContext } from "../../context/CardContext";

function CardHeader() {
  const { id, title } = useCardContext();
  return (
    <div className="absolute top-0 bg-dark bg-opacity-80 w-full h-8 flex items-center font-castoro rounded-t-xl hover:underline">
      <Link className="px-2" to={`/drinks/${id}`}>
        {title}
      </Link>
    </div>
  );
}

export default CardHeader;
