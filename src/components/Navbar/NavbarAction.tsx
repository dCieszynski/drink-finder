import React, { PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  gap: string;
};

function NavbarAction({ children, gap }: Props) {
  return <div className={`flex ${gap && gap} hover:text-active-yellow`}>{children}</div>;
}

export default NavbarAction;
