import React from "react";
import { cleanup, render, screen } from "@testing-library/react";

// pages and components
import Dashboard from "../../pages/Dashboard";

describe("Dashboard page", () => {
  it("should have the page title 'Account Analytics Dashboard'", () => {
    beforeAll(() => {
      render(<Dashboard />);
    });

    const pageTitle: string = "Account Analytics Dashboard";

    expect(screen.getByText(pageTitle)).toBeInTheDocument();
  });

  it("should have a filter dropdown element'", () => {
    beforeAll(() => {
      render(<Dashboard />);
    });

    expect(screen.getByTestId("creator-select")).toBeInTheDocument();
  });

  it("should have a table showing different metrics'", () => {
    beforeAll(() => {
      render(<Dashboard />);
    });

    expect(screen.getByTestId("recipe-metrics")).toBeInTheDocument();
  });

  afterAll(cleanup);
});
