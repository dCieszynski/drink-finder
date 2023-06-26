import React from "react";
import { screen, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Card from "../../../components/Card/Card";

const card = {
  id: 1,
  title: "Test",
  imageUrl: "test.jpg",
};

describe("test Card component", () => {
  test("renders Card", () => {
    render(
      <BrowserRouter>
        <Card data={card}>
          <Card.Background />
          <Card.Header />
        </Card>
      </BrowserRouter>
    );

    expect(screen.getByText("Test")).toBeInTheDocument();
    expect(screen.getByAltText("Test")).toBeInTheDocument();
  });
});
