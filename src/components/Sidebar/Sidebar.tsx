import React, { ReactNode } from "react";
import { SidebarContextProvider } from "../../context/SidebarContext";
import SidebarContent from "./SidebarContent";
import SidebarButton from "./SidebarButton";

type Props = {
  content: ReactNode;
};

function Sidebar({ content }: Props) {
  return (
    <SidebarContextProvider>
      <div className="fixed top-1/2 -translate-y-1/2 left-0">{content}</div>
    </SidebarContextProvider>
  );
}

Sidebar.Content = SidebarContent;
Sidebar.Button = SidebarButton;

export default Sidebar;
