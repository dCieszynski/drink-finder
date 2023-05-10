import React, { PropsWithChildren } from "react";
import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { SidebarContextProvider, useSidebarContext } from "../../context/SidebarContext";

describe("test SidebarContextProvider", () => {
  test("changes activeButtonTitle", () => {
    const wrapper = ({ children }: PropsWithChildren) => <SidebarContextProvider>{children}</SidebarContextProvider>;

    const { result } = renderHook(() => useSidebarContext(), { wrapper });

    act(() => {
      result.current.changeActiveButtonTitle("Test");
    });

    expect(result.current.activeButtonTitle).toEqual("Test");
  });
});
