import React from "react";
import { screen, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import HomeButton from "../../../components/HomeButton/HomeButton";

describe("test HomeButton component", () => {
  test("renders HomeButton component", () => {
    render(
      <BrowserRouter>
        <HomeButton />
      </BrowserRouter>
    );

    expect(screen.getByRole("link")).toBeInTheDocument();
  });
});
