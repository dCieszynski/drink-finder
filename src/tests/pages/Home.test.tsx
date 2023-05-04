import React from "react";
import { screen, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "../../pages/Home";

describe("test Home page", () => {
  test("renders page with header", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    expect(screen.getByText("CHOOSE")).toBeInTheDocument();
    expect(screen.getByText("YOUR DRINK")).toBeInTheDocument();
  });
});
