import React, { ComponentPropsWithoutRef } from "react";
import { IconType } from "react-icons";
import { useSidebarContext } from "../../context/SidebarContext";

type Props = ComponentPropsWithoutRef<"button"> & {
  Icon: IconType;
  title: string;
};

function SidebarButton({ Icon, title, onClick }: Props) {
  const { activeButtonTitle, changeActiveButtonTitle } = useSidebarContext();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    changeActiveButtonTitle(title);
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <button
      type="button"
      onClick={(e) => handleClick(e)}
      className={`w-16 h-[100px] text-xs font-castoro text-dark ${
        activeButtonTitle === title ? "bg-active-yellow text-dark" : "bg-dark text-white"
      } flex flex-col justify-center items-center gap-1 rounded-tr-xl rounded-br-xl`}
    >
      <Icon className="text-[32px]" />
      {title}
    </button>
  );
}

export default SidebarButton;
