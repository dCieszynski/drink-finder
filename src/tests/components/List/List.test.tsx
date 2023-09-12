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
    render(
      <BrowserRouter>
        <List />
      </BrowserRouter>
    );
    expect(screen.getByText("No drinks found")).toBeInTheDocument();
  });
});
