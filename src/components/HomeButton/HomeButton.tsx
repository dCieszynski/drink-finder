import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";

function HomeButton() {
  return (
    <Link to="/" className="absolute top-2 left-2 text-[32px] p-1 bg-dark bg-opacity-75 text-white rounded-xl z-40">
      <BiArrowBack />
    </Link>
  );
}

export default HomeButton;
