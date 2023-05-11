import React, { PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  gap: string;
};

function NavbarAction({ children, gap }: Props) {
  return <div className={`flex gap-${gap}`}>{children}</div>;
}

export default NavbarAction;
