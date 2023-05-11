import React from "react";
import { screen, render } from "@testing-library/react";
import { AiFillHome } from "react-icons/ai";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../../../components/Navbar/Navbar";

const links = [
  {
    Icon: AiFillHome,
    to: "/",
  },
];

describe("test Navbar component", () => {
  test("renders Navbar", () => {
    render(
      <BrowserRouter>
        <Navbar links={links} gap="16" />
      </BrowserRouter>
    );

    expect(screen.getByRole("link")).toBeInTheDocument();
  });

  test("renders Navbar with action", () => {
    render(
      <BrowserRouter>
        <Navbar
          links={links}
          gap="16"
          action={
            <Navbar.Action gap="16">
              <Navbar.Search />
            </Navbar.Action>
          }
        />
      </BrowserRouter>
    );

    expect(screen.getAllByRole("button").length).toBe(1);
  });
});
