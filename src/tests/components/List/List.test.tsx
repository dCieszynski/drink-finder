import React from "react";
import { screen, render } from "@testing-library/react";
import { vi } from "vitest";
import { BrowserRouter } from "react-router-dom";
import List from "../../../components/List/List";

describe("test List component", () => {
  afterEach(() => {
    vi.clearAllMocks();
    vi.resetAllMocks();
  });

  test("renders List with data", () => {
    vi.mock("../../../hooks/useDrinks", () => ({
      useDrinks: () => ({
        drinks: [{ idDrink: 1, strDrink: "Test", strDrinkThumb: "test.jpg" }],
      }),
    }));

    render(
      <BrowserRouter>
        <List />
      </BrowserRouter>
    );
    expect(screen.getByText("Test")).toBeInTheDocument();
    expect(screen.getByAltText("Test")).toBeInTheDocument();
  });
});
