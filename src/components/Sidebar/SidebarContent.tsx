import React, { Children, PropsWithChildren, useCallback, useEffect } from "react";
import { useSidebarContext } from "../../context/SidebarContext";

function SidebarContent({ children }: PropsWithChildren) {
  const { changeActiveButtonTitle } = useSidebarContext();

  const setInitialActiveTile = useCallback(() => {
    const firstElement = Children.toArray(children)[0] as JSX.Element;
    if (firstElement.props.title) {
      changeActiveButtonTitle(firstElement.props.title);
    }
  }, [changeActiveButtonTitle, children]);

  useEffect(() => {
    setInitialActiveTile();
  }, [setInitialActiveTile]);

  return <div>{children}</div>;
}

export default SidebarContent;
