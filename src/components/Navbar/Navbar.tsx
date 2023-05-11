import React, { ReactNode } from "react";
import { IconType } from "react-icons";
import { Link } from "react-router-dom";
import NavbarAction from "./NavbarAction";
import NavbarSearch from "./NavbarSearch";

type Props = {
  links: {
    Icon: IconType;
    to: string;
  }[];
  action?: ReactNode;
  gap: string;
};

const defaultProps = {
  action: undefined,
};

function Navbar({ links, action, gap }: Props) {
  return (
    <div
      className={`text-[2rem] fixed bottom-4 left-1/2 -translate-x-1/2 bg-dark bg-opacity-75 min-w-[256px] max-w-screen-sm min-h-8 rounded-3xl flex items-center justify-center gap-${gap} py-4 px-8`}
    >
      <ul className={`flex gap-${gap} max-w-full gap-y-2 flex-wrap`}>
        {links.map((link) => (
          <Link key={link.to} to={link.to}>
            <link.Icon />
          </Link>
        ))}
      </ul>
      {action && action}
    </div>
  );
}

Navbar.defaultProps = defaultProps;

Navbar.Action = NavbarAction;
Navbar.Search = NavbarSearch;

export default Navbar;
