import React from "react";
import { screen, render } from "@testing-library/react";
import { vi } from "vitest";
import { BiDrink } from "react-icons/bi";
import SidebarButton from "../../../components/Sidebar/SidebarButton";
import { SidebarContextProvider } from "../../../context/SidebarContext";

describe("test SidebarButton", () => {
  test("renders SidebarButton", () => {
    render(
      <SidebarContextProvider>
        <SidebarButton title="" Icon={BiDrink} />
      </SidebarContextProvider>
    );

    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  test("renders title", () => {
    render(
      <SidebarContextProvider>
        <SidebarButton title="Test" Icon={BiDrink} />
      </SidebarContextProvider>
    );

    expect(screen.getByText("Test")).toBeInTheDocument();
  });

  test("handles click", () => {
    render(
      <SidebarContextProvider>
        <SidebarButton title="Test" Icon={BiDrink} />
      </SidebarContextProvider>
    );

    const btn = screen.getByRole("button");
    btn.click();
  });

  test("handles click", () => {
    const onClickMock = vi.fn();
    render(
      <SidebarContextProvider>
        <SidebarButton title="Test" Icon={BiDrink} onClick={onClickMock} />
      </SidebarContextProvider>
    );

    const btn = screen.getByRole("button");
    btn.click();
    expect(onClickMock).toHaveBeenCalled();
  });
});
