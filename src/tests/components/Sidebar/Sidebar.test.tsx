import React from "react";
import { screen, render } from "@testing-library/react";
import { BiDrink } from "react-icons/bi";
import Sidebar from "../../../components/Sidebar/Sidebar";

describe("test Sidebar", () => {
  test("renders Sidebar", () => {
    render(
      <Sidebar
        content={
          <Sidebar.Content>
            <Sidebar.Button Icon={BiDrink} title="Test" />
          </Sidebar.Content>
        }
      />
    );

    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
